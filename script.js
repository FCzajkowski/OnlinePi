document.addEventListener("DOMContentLoaded", () => {
    const whyTextDiv = document.getElementById("why__text");

    // Define the text for each button
    const buttonTexts = {
        "Setup": "OnlinePi requires no installation, only login.",
        "Access": "You can access OnlinePi on your computer, everywhere in the world.",
        "Price": "The basic version of OnlinePi is totally free.",
        "Team": "Unlike in other IDEs, OnlinePi gives you the possibility to work with your team in real-time."
    };

    // Attach click event listeners to each button
    document.querySelectorAll("#why__buttons button").forEach(button => {
        const buttonText = button.innerText; // Get the text of the button
        if (buttonTexts[buttonText]) {
            button.addEventListener("click", () => {
                whyTextDiv.innerHTML = `<p>${buttonTexts[buttonText]}</p>`;
            });
        }
    });
});

const button = document.getElementById('theme');
let isDarkMode = false;

button.addEventListener('click', () => {
  const body = document.documentElement;

  if (isDarkMode) {
    body.style.setProperty('color-scheme', 'light');
  } else {
    body.style.setProperty('color-scheme', 'dark');
  }

  isDarkMode = !isDarkMode;
});


const themeButton = document.getElementById('theme');
let themeMode = 0; // 0 for light theme, 1 for dark theme
let theme = "light";

themeButton.addEventListener('click', () => {
  themeMode = (themeMode + 1) % 2; // Toggle between 0 and 1
  if (themeMode == 1){
    theme = "dark";
  }
  else{
    theme = "white";
  }
  document.documentElement.style.setProperty('--theme-mode', theme);
});

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
const cursorOutlinetwo = document.querySelector("[data-cursor-outline-2]");
window.addEventListener("mousemove", function (e){

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  //cursorOutline.style.left = `${posX}px`;
  //cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top:`${posY}px`,
  }, {duration: 800, fill: "forwards"})
});
