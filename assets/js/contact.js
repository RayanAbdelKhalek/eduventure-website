// Scroll to form when clicking on a card
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    document.getElementById("reason").value =
      card.dataset.reason === "demo"
        ? "Request a Demo"
        : card.dataset.reason === "product"
        ? "Get the Product"
        : "Support & Questions";
    document
      .getElementById("contact-form")
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Handle reason from URL
const params = new URLSearchParams(window.location.search);
const reason = params.get("reason");
if (reason) {
  const select = document.getElementById("reason");
  if (select) {
    const formatted =
      reason === "support"
        ? "Support & Questions"
        : reason === "demo"
        ? "Request a Demo"
        : reason === "product"
        ? "Get the Product"
        : "";
    select.value = formatted;
    document
      .getElementById("contact-form")
      .scrollIntoView({ behavior: "smooth" });
  }
}
