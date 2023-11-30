const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

const cards = document.querySelectorAll(".gift-card");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    cards[i].style.backgroundColor = "#C4A484";
    cards[i].style.color = "#ff0000";
  });
}
