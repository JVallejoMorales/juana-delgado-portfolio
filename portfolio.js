const concepts = {
  product: {
    title: "Product demo",
    description: "Help the viewer see how a skincare product fits into an everyday routine.",
    shots: [
      "Introduce the product and the step of the routine it belongs in.",
      "Show the texture, amount, and application in clear close-ups.",
      "Close with a simple recap of how to use it."
    ]
  },
  unboxing: {
    title: "Unboxing",
    description: "Give viewers a clear idea of what arrives and what the individual details look like.",
    shots: [
      "Start with the sealed box in an overhead shot.",
      "Reveal the packaging and items one at a time, using close-ups for important details.",
      "End with everything laid out in the frame."
    ]
  },
  story: {
    title: "Brand story",
    description: "Follow a small textile product from the first material choices to the finished piece.",
    shots: [
      "Introduce the material and show where the piece is made.",
      "Follow a few distinct steps and let the maker explain one decision.",
      "Show the finished piece in use and give the viewer a clear next step."
    ]
  }
};

const dialog = document.querySelector(".concept-dialog");
const title = document.querySelector("#dialog-title");
const description = document.querySelector("#dialog-description");
const storyboard = document.querySelector("#dialog-storyboard");
let previousButton;

for (const button of document.querySelectorAll("[data-concept]")) {
  button.addEventListener("click", () => {
    const concept = concepts[button.dataset.concept];
    title.textContent = concept.title;
    description.textContent = concept.description;
    const shots = concept.shots.map((shot) => {
      const item = document.createElement("li");
      item.textContent = shot;
      return item;
    });
    storyboard.replaceChildren(...shots);
    previousButton = button;
    dialog.showModal();
    document.documentElement.classList.add("dialog-open");
  });
}

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

dialog.addEventListener("close", () => {
  document.documentElement.classList.remove("dialog-open");
  previousButton?.focus();
});
