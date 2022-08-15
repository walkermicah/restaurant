export default function homePage() {
  const home = document.createElement("div");
  home.classList.add("home");

  const h1 = document.createElement("h1");
  h1.textContent = "Al Dente";

  const h2 = document.createElement("h2");
  h2.textContent = "Fresh handmade pasta";

  home.append(h1, h2);

  return home;
}
