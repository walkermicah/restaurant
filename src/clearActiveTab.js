export default function clearActiveTab(element) {
  //clear active tab
  Array.from(document.querySelectorAll(".active-tab")).forEach((el) =>
    el.classList.remove("active-tab")
  );

  //clear content
  element.removeChild(element.lastChild);
}
