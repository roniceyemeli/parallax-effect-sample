document.addEventListener("DOMContentLoaded", () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };

  //Image animation
  const revealCallBack = (entries) => {
    entries.forEach((entry) => {
      const box = entry.target;

      if (entry.isIntersecting) {
        box.classList.add("animating");
        return;
      }

      if (entry.boundClientRect.top > 0) {
        box.classList.remove("animating");
      }
    });
  };
  const revealObserver = new IntersectionObserver(revealCallBack, options);

  document.querySelectorAll(".reveal").forEach((rev) => {
    revealObserver.observe(rev);
  });

  // Text animation
  const fadeupCallBack = (entries) => {
    entries.forEach((entry) => {
      const box = entry.target;
      box.classList.add("not-fading-up");

      if (entry.isIntersecting) {
        box.classList.add("fading-up");
        return;
      }

      if (entry.boundClientRect.top > 0) {
        box.classList.remove("fading-up");
      }
    });
  };

  const fadeupObserver = new IntersectionObserver(fadeupCallBack, options);

  document.querySelectorAll(".fadeup").forEach((rev) => {
    fadeupObserver.observe(rev);
  });
});
