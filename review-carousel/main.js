// class Review {
//   constructor(imageURL, name, category, details) {
//     this.imageURL = imageURL;
//     this.name = name;
//     this.category = category;
//     this.details = details;
//   }
// }

const reviews = [
  {
    imageUrl: "./files/tanvir-fox.jpg",
    author: "Abdul Aziz Tanvir",
    designation: "fullstack developer",
    content:
      "Just deployed a new feature on our e-commerce platform!  Built a snappy front-end interface with React that integrates perfectly with our Python/Django backend. Had to wrangle some tricky database queries to optimize search results, but overall it's a win. Now prepping for user acceptance testing gotta make sure this new checkout flow is smooth.",
  },
  {
    imageUrl: "./files/nail-fa.jpg",
    author: "Fahmida Rahman",
    designation: "Frontend Developer",
    content:
      "Pixel perfect! Just polished off the landing page design using a combo of CSS Grid and some fancy animations with Framer Motion.Feels great to see the designer's mockup come to life.Now I'm diving into the responsiveness, gotta make sure this scales flawlessly across all devices.Users shouldn't have a janky experience on their phone, right?",
  },
  {
    imageUrl: "./files/bullu-cat.jpg",
    author: "Cat the Bullu",
    designation: "House-wife",
    content:
      "Oma, this morning seems quite hectic! I've already arranged the children's school lunchboxes right after everyone woke up. Now, I need to chop vegetables and cook lentils in the kitchen. In the afternoon, I'll need to tidy up the house a bit to keep it clean. But in the end, seeing everyone happy makes all the tiredness of the day vanish! ",
  },
  {
    imageUrl: "./files/autocad-designer.jpg",
    author: "Graphics card",
    designation: "AutoCad designer",
    content:
      "just finalized the floor plan for that new office building! Everything looked good at a light scale, but I had to tweak some dimensions to meet fire code. Wrangling the fire alarm system layout took some time, but the client's happy now. Time to jump into the 3D model and grab a render to show the final look with all the furniture in place.",
  },
];

const carouselImg = document.getElementById("carouselImg");
const nameId = document.getElementById("nameId");
const idCategory = document.getElementById("idCategory");
const carouselDetails = document.getElementById("carouselDetails");
// buttons

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
// random review button
const surpriseButton = document.getElementById("surprise_button");
window.addEventListener("DOMContentLoaded", function () {
  let currentreviewIndex = 0;

  function updateReview() {
    carouselImg.src = reviews[currentreviewIndex].imageUrl;
    nameId.textContent = reviews[currentreviewIndex].author;
    idCategory.textContent = reviews[currentreviewIndex].designation;
    carouselDetails.textContent = reviews[currentreviewIndex].content;
  }

  updateReview();

  rightButton.addEventListener("click", function () {
    currentreviewIndex = (currentreviewIndex + 1) % reviews.length;

    updateReview();
  });
  leftButton.addEventListener("click", function () {
    currentreviewIndex =
      (currentreviewIndex - 1 + reviews.length) % reviews.length;
    updateReview();
  });
  surpriseButton.addEventListener("click", function () {
    currentreviewIndex = Math.floor(Math.random() * reviews.length);
    updateReview();
  });
});

// console.log(78 % 4)
