// =====================================================
// main.js
// Author: Darragh Morrissey
// Description: Custom scripts for Bootstrap CV website
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Bootstrap CV loaded successfully.");

  // =====================================================
  // Smooth Scroll for Internal Anchor Links
  // =====================================================
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#") && targetId.length > 1) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // =====================================================
  // Bootstrap Form Validation
  // =====================================================
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach(form => {
    form.addEventListener("submit", event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // Optional success feedback
        event.preventDefault();
        alert("✅ Thank you! Your message has been submitted successfully.");
        form.reset();
        form.classList.remove("was-validated");
      }
      form.classList.add("was-validated");
    });
  });
});
