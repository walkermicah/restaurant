export default function contactPage() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const h2 = document.createElement("h2");
  h2.textContent = "Contact Us";

  const reservations = document.createElement("p");
  reservations.classList.add("contact-text");
  reservations.textContent = "For reservations, please call 555-555-5555";

  const inquiries = document.createElement("p");
  inquiries.classList.add("contact-text");
  inquiries.textContent =
    "For general inquiries, please email al-dente@email.com";

  contact.append(h2, reservations, inquiries);

  return contact;
}
