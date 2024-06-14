"Use Strict";
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
showingColorName.innerHTML = "Click Button";

changeColorBtn.addEventListener("click", function () {
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //   const randomNumber = Math.floor(Math.random() * colors.length);
  const randomNumber = getRandomColor();

  let randomColor;

  try {
    // randomColor = colors[randomNumber];
    randomColor = randomNumber;
    showingColorName.innerHTML = randomColor;
    document.body.style.backgroundColor = randomColor;
  } catch (error) {
    console.log(error);
    showingColorName.innerHTML = `click again`;
  }
});

// own color api
// i need  6 letter and one #
// lets do it

// function myRandomNUmber() {
//   let letters = "01234ABCDEF56789";
//   let colors = "#";

//   let  aaa = "a"
//   let bbb = "b"
//   for (let x = 0; x < 6; x++) {
//     // console.log(colors += letters[Math.floor((Math.random()*16))]);
//     aaa+=bbb
//     console.log(aaa)
//   }
// }
// myRandomNUmber();
