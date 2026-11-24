const reelGrid = document.querySelector(".reel-grid");

function loadInstagramEmbeds() {
  const script = document.createElement("script");
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  document.head.append(script);
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      observer.disconnect();
      loadInstagramEmbeds();
    }
  }, { rootMargin: "400px" });

  observer.observe(reelGrid);
} else {
  loadInstagramEmbeds();
}
