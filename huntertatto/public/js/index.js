const carouselImages = document.getElementById("carouselImages");
const items = document.querySelectorAll("#carouselImages > div");
const itemWidth = items[0].offsetWidth; // Width of each item
const totalItems = items.length;
let currentPosition = 0;

// Scroll to the next item
function scrollNext() {
  currentPosition += itemWidth;
  
  // If it reaches the end, reset to the beginning
  if (currentPosition >= itemWidth * totalItems) {
    currentPosition = 0;
  }

  // Apply the transform
  carouselImages.style.transform = `translateX(-${currentPosition}px)`;
}

// Scroll to the previous item
function scrollPrev() {
  currentPosition -= itemWidth;
  
  // If it goes before the first item, reset to the last position
  if (currentPosition < 0) {
    currentPosition = itemWidth * (totalItems - 1);
  }

  // Apply the transform
  carouselImages.style.transform = `translateX(-${currentPosition}px)`;
}

// Add event listeners for buttons
document.getElementById("next").addEventListener("click", scrollNext);
document.getElementById("prev").addEventListener("click", scrollPrev);



const carouselImages1 = document.getElementById("carouselImages1");
const items1 = document.querySelectorAll("#carouselImages1 > div");
const itemWidth1 = items[0].offsetWidth; // Width of each item
const totalItems1 = items.length;
let currentPosition1 = 0;

// Scroll to the next item
function scrollNext1() {
  currentPosition1 += itemWidth1;
  
  // If it reaches the end, reset to the beginning
  if (currentPosition1 >= itemWidth1 * totalItems1) {
    currentPosition1 = 0;
  }

  // Apply the transform
  carouselImages1.style.transform = `translateX(-${currentPosition1}px)`;
}

// Scroll to the previous item
function scrollPrev1() {
  currentPosition1 -= itemWidth1;
  
  // If it goes before the first item, reset to the last position
  if (currentPosition1 < 0) {
    currentPosition1 = itemWidth1 * (totalItems1 - 1);
  }

  // Apply the transform
  carouselImages1.style.transform = `translateX(-${currentPosition1}px)`;
}

// Add event listeners for buttons
document.getElementById("next1").addEventListener("click", scrollNext1);
document.getElementById("prev1").addEventListener("click", scrollPrev1);


// const carouselImages3 = document.getElementById("carouselImages3");
// const items3 = document.querySelectorAll("#carouselImages3 > div");
// const itemWidth3 = items[0].offsetWidth; // Width of each item
// const totalItems3 = items.length;
// let currentPosition3 = 0;

// // Scroll to the next item
// function scrollNext3() {
//   currentPosition3 += itemWidth3;
  
//   // If it reaches the end, reset to the beginning
//   if (currentPosition3 >= itemWidth3 * totalItems1) {
//     currentPosition3 = 0;
//   }

//   // Apply the transform
//   carouselImages3.style.transform = `translateX(-${currentPosition3}px)`;
// }

// // Scroll to the previous item
// function scrollPrev3() {
//   currentPosition3 -= itemWidth3;
  
//   // If it goes before the first item, reset to the last position
//   if (currentPosition3 < 0) {
//     currentPosition3 = itemWidth3 * (totalItems3 - 1);
//   }

//   // Apply the transform
//   carouselImages3.style.transform = `translateX(-${currentPosition3}px)`;
// }

// // Add event listeners for buttons
// document.getElementById("next3").addEventListener("click", scrollNext3);
// document.getElementById("prev3").addEventListener("click", scrollPrev3);



