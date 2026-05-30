const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

fades.forEach((fade) => {
  observer.observe(fade);
});
