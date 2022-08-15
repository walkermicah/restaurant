export default function navigation(links) {
  const nav = document.createElement("ul");

  links.forEach((link) => {
    const navItem = document.createElement("li");
    navItem.textContent = link[0].toUpperCase() + link.substring(1);
    navItem.classList.add("link");
    navItem.setAttribute("id", link);
    if (navItem.id === "home") navItem.classList.add("active-tab");
    nav.appendChild(navItem);
  });

  return nav;
}
