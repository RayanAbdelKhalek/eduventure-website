const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq-question");
  btn.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    faqItems.forEach(i => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});
