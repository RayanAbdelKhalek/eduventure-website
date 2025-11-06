window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 10) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

document.addEventListener("DOMContentLoaded", () => {
  // Ensure fade-in always runs
  document.body.classList.add("fade-in");

  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    if (!link) return; // safety check

    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

    // Add event listener safely
    try {
      link.addEventListener("click", e => {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 400);
      });
    } catch (err) {
      console.warn("Skipping broken link:", link, err);
    }
  });
});
