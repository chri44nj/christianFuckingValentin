const hero = document.querySelector("#hero");
const attribute = document.querySelectorAll(".attribute");
let hoveredCount = 0;

attribute.forEach((attribute) => {
  attribute.addEventListener("mouseover", attributeHovered);
  console.log("hovered!");
});

function attributeHovered(event) {
  if (!event.target.classList.contains("hovered")) {
    hoveredCount++;
    console.log(hoveredCount);
    event.target.style.color = "var(--accent)";
    console.log("color changed!");
    event.target.classList.add("hovered");
  }

  if (hoveredCount == 10) {
    hero.style.backgroundImage = "url(pics/PB_C1.jpg)";
    attribute.forEach((attribute) => {
      attribute.style.color = "var(--secondary)";
    });
  }
}
