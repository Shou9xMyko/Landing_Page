const btnHome = document.getElementById("navHome");
const btnAksi = document.getElementById("navAksi");
const btnArtikel = document.getElementById("navArtikel");
const Login = document.querySelector(".btnLogin");

btnHome.addEventListener("click", () => {
  window.close();
  window.open("../../index.html");
});

btnAksi.addEventListener("click", () => {
  window.close();
  window.open("../aksiPage/aksiPage.html");
});

btnArtikel.addEventListener("click", () => {
  window.close();
  window.open("../ArtikelPage/artikelPage.html");
});

Login.addEventListener("click", () => {
  window.close();
  window.open("../loginPage/loginPage.html");
});
