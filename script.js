// Parte para o Dark Mode da Página
const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDarkMode = document.body.classList.contains("dark-theme");
  input.style.color = isDarkMode ? "white" : "black";
});

// parte para os cards da parte gift serem selecionáveis
const cards = document.querySelectorAll(".gift-card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    const isModified = cards[i].style.backgroundColor === "rgb(196, 164, 132)";

    if (isModified) {
      cards[i].style.backgroundColor = "";
      cards[i].style.color = "";
    } else {
      cards[i].style.backgroundColor = "#C4A484";
      cards[i].style.color = "#ff0000";
    }
  });
}

// parte para os cards da parte new serem selecionáveis
const cards2 = document.querySelectorAll(".new-card");

for (let i = 0; i < cards2.length; i++) {
  cards2[i].addEventListener("click", () => {
    const isModified = cards2[i].style.backgroundColor === "rgb(196, 164, 132)";

    if (isModified) {
      cards2[i].style.backgroundColor = "";
      cards2[i].style.color = "";
    } else {
      cards2[i].style.backgroundColor = "#C4A484";
      cards2[i].style.color = "#ff0000";
    }
  });
}
