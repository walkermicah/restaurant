import "./style.css";
import image from "./image.js";
import navigation from "./navigation.js";
import homePage from "./homePage.js";
import menuPage from "./menuPage.js";
import contactPage from "./contactPage.js";
import clearActiveTab from "./clearActiveTab.js";

const container = document.getElementById("container");
const content = document.createElement("div");

function loadPage() {
  container.append(image(), content);
  content.classList.add("content");
  content.append(navigation(["home", "menu", "contact"]), homePage());
}

loadPage();

content.addEventListener("click", (e) => {
  if (!e.target.classList.contains("link")) return;

  clearActiveTab(content);
  e.target.classList.add("active-tab");

  if (e.target.id === "home") {
    content.appendChild(homePage());
  }
  if (e.target.id === "menu") {
    content.appendChild(menuPage());
  }
  if (e.target.id === "contact") {
    content.appendChild(contactPage());
  }
});
