const menuArr = [
  {
    title: "Spaghetti Carbonara",
    description:
      "A classic Roman dish made with eggs, hard cheese, cured pork, and black pepper.",
  },
  {
    title: "Tagliatelle Bolognese",
    description: "Served with our homemade meat sauce.",
  },
  {
    title: "Penne Alla Vodka",
    description: "Penne in a rich tomato cream sauce with vodka and pancetta.",
  },
  {
    title: "Fettucine Alfredo",
    description: "Fettucine in a creamy white sauce.",
  },
  {
    title: "Spaghetti Aglio e Olio",
    description: "A simple dish made with spaghetti, olive oil and garlic.",
  },
  {
    title: "Gnocchi Caprese",
    description: "Gnocchi baked with tomatoes, cheese and basil.",
  },
  {
    title: "Cacio e Pepe",
    description: "Cheese and pepper! Simple and delicious.",
  },
  {
    title: "Lasagna Bolognese",
    description: "A hearty dish baked in our homemade meat sauce.",
  },
  {
    title: "Linguine di Mare",
    description: "Linguine with fresh seafood in a light tomato sauce.",
  },
  {
    title: "Spicy Rigatoni",
    description: "Rigatoni in a creamy tomato sauce with hot chili oil.",
  },
  {
    title: "Spaghetti al Limone",
    description: "Spaghetti in a light creamy lemon sauce.",
  },
  {
    title: "Baked Ziti",
    description: "Ziti with tomato sauce and cheese, fresh from the oven.",
  },
];

const addMenuItem = (title, description) => {
  const menuItem = document.createElement("div");
  menu.classList.add("menu-item");

  const menuTitle = document.createElement("h3");
  menuTitle.textContent = `${title}`;

  const menuDescription = document.createElement("p");
  menuDescription.classList.add("menu-text");
  menuDescription.textContent = `${description}`;

  menuItem.append(menuTitle, menuDescription);

  return menuItem;
};

export default function menuPage() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const h2 = document.createElement("h2");
  h2.textContent = "Menu";

  menu.appendChild(h2);

  menuArr.forEach((item) => {
    menu.appendChild(addMenuItem(item.title, item.description));
  });

  return menu;
}
