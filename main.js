"Use Strict"
const showingColorName = document.getElementById("showingColorName");
const changeColorBtn = document.getElementById("changeColorBtn");

const colors = [
  "#FF0000", // Red
  "#FFFF00", // Yellow
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FF00FF", // Magenta
  "#00FFFF", // Cyan
  "#808080", // Gray
  "#C0C0C0", // Silver
  "#000000", // Black
];

changeColorBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colors.length);
  let randomColor;

  try {
    randomColor = colors[randomNumber];
    showingColorName.innerHTML = randomColor;
    document.body.style.backgroundColor = randomColor;
  } catch (error) {
    console.log(error);
    showingColorName.innerHTML = `click again`;
  }
});
