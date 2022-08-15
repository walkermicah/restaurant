import Image from "./img/pasta.jpg";

export default function image() {
  const mainImg = document.createElement("img");
  mainImg.src = Image;
  mainImg.classList.add("main-img");

  return mainImg;
}
