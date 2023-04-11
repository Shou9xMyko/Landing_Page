// const btnHome = document.getElementById("navHome");
// const btnAksi = document.getElementById("navAksi");
// const btnArtikel = document.getElementById("navArtikel");
// const Login = document.querySelector(".btnLogin");

// btnHome.addEventListener("click", () => {
//   window.close();
//   window.open("./index.html");
// });

// btnAksi.addEventListener("click", () => {
//   window.close();
//   window.open("./anotherPage/aksiPage/aksiPage.html");
// });

// btnArtikel.addEventListener("click", () => {
//   window.close();
//   window.open("./anotherPage/ArtikelPage/artikelPage.html");
// });

// Login.addEventListener("click", () => {
//   window.close();
//   window.open("./anotherPage/loginPage/loginPage.html");
// });

function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name: name,
    email: email,
    city: city,
    zipCode: zipCode,
    status: status,
  };
}

function isNumber(string) {
  if (isNaN(string)) {
    return false;
  } else {
    return true;
  }
}

function checkboxIsChecked() {
  if (handleGetFormData().status == true) {
    return true;
  } else {
    return false;
  }
}

function validateFormData(formData) {
  const { name, city, email, zipCode, status } = formData;

  if (
    name != "" &&
    city != "" &&
    email != "" &&
    zipCode != "" &&
    isNumber(formData.zipCode) &&
    checkboxIsChecked() == true
  ) {
    return true;
  } else {
    return false;
  }
}

document
  .getElementById("submit-form")
  .addEventListener("click", function (event) {
    event.preventDefault();
    submit();
  });
function submit() {
  const dataIsi = handleGetFormData();
  const hasil = validateFormData(dataIsi);
  if (hasil == false) {
    document.getElementById("warning").innerText =
      "Periksa form anda sekali lagi";
  } else {
    document.getElementById("warning").innerText = "";
  }
}
