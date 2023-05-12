// Get DOM elements

const closeBtn = document.getElementById("close");
const menuIcon = document.getElementById("menu");
const ulList = document.querySelector("nav ul");
const overlay = document.querySelector(".overlay");
const cartBtn = document.getElementById("cart");
const chosenProducts = document.querySelector(".chosen-products");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const chosenQuantity = document.getElementById("chosen-quant");
const addNmb = document.getElementById("addedNmb");
const totalPrice = document.getElementById("total");
const addCart = document.getElementById("cartBtn");
const addedProduct = document.getElementById("added");
const emptyP = document.getElementById("empty");
const checkOut = document.getElementById("checkoutBtn")
const notificDiv = document.querySelector(".quantity");
const deleteCart =document.getElementById("delete");
const jpgDiv = document.querySelector(".jpg-div");
const secondImgDiv = document.querySelector(".second");
const overlayTwo = document.querySelector(".overlay-2");
const clearBtn = document.getElementById("clear")


// Function to show the menu based on the window size

function showMenu() {
  if (window.innerWidth <= 1200) {
    // Full-screen menu for smaller screens
    ulList.classList.add("full-screen");
    document.body.appendChild(ulList);
    ulList.style.display = "flex";
    closeBtn.style.display = "block";
    overlay.style.display = "block";
  } else {
    // Regular menu for larger screens
    ulList.classList.remove("full-screen");
    document.querySelector(".first-div").appendChild(ulList);
    ulList.style.display = "flex";
    closeBtn.style.display = "none";
    overlay.style.display = "none";
  }
}

 // Function to hide the menu
function hideMenu() {
  if (window.innerWidth <= 1200) {
    ulList.style.display = "none";
    closeBtn.style.display = "none";
    overlay.style.display = "none";
  }
}

// Event listeners
menuIcon.addEventListener("click", showMenu);

closeBtn.addEventListener("click", () => {
  if (window.innerWidth <= 1200) {
    ulList.classList.remove("full-screen");
    document.querySelector(".first-div").appendChild(ulList);
    ulList.style.display = "none";
    overlay.style.display = "none";
    closeBtn.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  showMenu();
  hideMenu();
});

cartBtn.addEventListener("click", () => {
  // Toggle the display of chosen products
  if (chosenProducts.style.display === "block") {
    chosenProducts.style.display = "none";
  } else {
    chosenProducts.style.display = "block";
  }
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  // Hide chosen products if a click occurs outside
  const targetElement = event.target;
  if (!chosenProducts.contains(targetElement)) {
    chosenProducts.style.display = "none";
  }
});


// Quantity buttons
plusBtn.addEventListener("click" ,() => {
   let currentValue = parseInt(chosenQuantity.innerText);
   let newValue = currentValue + 1
   chosenQuantity.innerText= newValue;
})

minusBtn.addEventListener("click" , () => {
 // Decrease the chosen quantity by 1, with a minimum of 0
  let currentValue = parseInt(chosenQuantity.innerText);
  if (currentValue === 0) {
    return;
  }
  let newValue = currentValue - 1;
  chosenQuantity.innerText = newValue;
})
let totalChosenQuantity = 0;


// Execute the code when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
// Retrieve the stored values from localStorage or set default values
let totalChosenQuantity = localStorage.getItem("totalChosenQuantity");
totalChosenQuantity = totalChosenQuantity ? parseInt(totalChosenQuantity) : 0;

let addedProductVisible = localStorage.getItem("addedProductVisible");
addedProductVisible = addedProductVisible === "true";

let totalPriceValue = localStorage.getItem("totalPrice");
totalPriceValue = totalPriceValue ? parseInt(totalPriceValue) : 0;


// Display the total chosen quantity notification if it's greater than 0
  if (totalChosenQuantity > 0) {
    notificDiv.style.display = "block";
    notificDiv.innerHTML = `<h6>${totalChosenQuantity}</h6>`;
  }
  // Display the added product section and update values if it's visible
  if (addedProductVisible) {
    addedProduct.style.display = "flex";
    addNmb.innerText = notificDiv.innerText
    emptyP.style.display = "none";
    checkOut.style.display = "block"
  }

 // Update the total price display
  totalPrice.innerText = ` $${totalPriceValue.toFixed(2)}`;
});


addCart.addEventListener("click", () => {
  if (chosenQuantity.innerText > 0) {
    emptyP.style.display = "none";
    addedProduct.style.display = "flex";
    checkOut.style.display = "block";
    notificDiv.style.display = "block";

    let chosenQuantityValue = parseInt(chosenQuantity.innerText);
    let totalChosenQuantity = localStorage.getItem("totalChosenQuantity");
    totalChosenQuantity = totalChosenQuantity ? parseInt(totalChosenQuantity) : 0;
    totalChosenQuantity += chosenQuantityValue;

    notificDiv.innerHTML = `<h6>${totalChosenQuantity}</h6>`;
    chosenQuantity.innerText = 0;
    addNmb.innerText = parseInt(notificDiv.innerText);

    let totalPriceValue = 125 * parseInt(notificDiv.innerText);
    totalPrice.innerText = ` $${totalPriceValue.toFixed(2)}`;

    // Store the updated values in localStorage
    localStorage.setItem("totalChosenQuantity", totalChosenQuantity);
    localStorage.setItem("totalPrice", totalPriceValue);
    localStorage.setItem("addedProductVisible", true);
  }
});

deleteCart.addEventListener("click" , () =>{
  // Clear the added product section and reset quantities and total
  addedProduct.style.display ="none";
  checkOut.style.display = "none";
  emptyP.style.display = "block"
  notificDiv.style.display = "none"

  chosenQuantity.innerText = 0;
  addNmb.innerText = 0;
  notificDiv.innerText = 0;
  totalPrice.innerText = "$0.00";

  // Clear the values from localStorage
  localStorage.removeItem("totalChosenQuantity");
  localStorage.removeItem("totalPrice");
  localStorage.removeItem("addedProductVisible");
} )

jpgDiv.addEventListener("click" , () => {
  if(window.innerWidth > 768){
    // Show the second image div and overlay
    secondImgDiv.style.display = "block";
    overlayTwo.style.display = "block"

  clearBtn.addEventListener("click" , () => {
    // Hide the second image div and overlay when clear button is clicked
      secondImgDiv.style.display = "none";
      overlayTwo.style.display = "none"
    }) 
  }
  }
)

// Event listener to hide elements on window resize
window.addEventListener("resize" , () => {
 if(window.innerWidth < 768) {
    secondImgDiv.style.display = "none";
      overlayTwo.style.display = "none"
}
});



// Variables for first set of thumbnails and images
const thumbnailImgFirst = document.querySelector(".thumbnail-img1");
const thumbnailImgSecond = document.querySelector(".thumbnail-img2");
const thumbnailImgThird = document.querySelector(".thumbnail-img3");
const thumbnailImgFourth = document.querySelector(".thumbnail-img4");

const firstImg = document.querySelector(".first-image");
const secondImg = document.querySelector(".second-image");
const thirdImg = document.querySelector(".third-image");
const fourthImg = document.querySelector(".fourth-image");
const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");

const thumbnailImages = [thumbnailImgFirst, thumbnailImgSecond, thumbnailImgThird, thumbnailImgFourth];

// Function to handle click on a thumbnail
function handleThumbnailClick(clickedIndex) {
  thumbnailImages.forEach((thumbnail, index) => {
    if (index === clickedIndex) {
      thumbnail.parentElement.classList.add("clicked-div");
      thumbnail.style.opacity = "0.5";
    } else {
      thumbnail.parentElement.classList.remove("clicked-div");
      thumbnail.style.opacity = "";
    }
  });


// Display corresponding image based on clicked thumbnail
  switch (clickedIndex) {
    case 0: 
      secondImg.style.display = "none";
      firstImg.style.display = "block";
      thirdImg.style.display = "none";
      fourthImg.style.display = "none";
      break;
    case 1:
      secondImg.style.display = "block";
      firstImg.style.display = "none";
      thirdImg.style.display = "none";
      fourthImg.style.display = "none";
      break;
    case 2:
      secondImg.style.display = "none";
      firstImg.style.display = "none";
      thirdImg.style.display = "block";
      fourthImg.style.display = "none";
      break;
    case 3:
      secondImg.style.display = "none";
      firstImg.style.display = "none";
      thirdImg.style.display = "none";
      fourthImg.style.display = "block";
      break;
    default:
      break;
  }

  const images = [firstImg, secondImg, thirdImg, fourthImg];
  images.forEach((image) => {
    image.style.opacity = "0";
    image.classList.add("fade-in-animation");
  });

}

// Set the default behavior for the first thumbnail
thumbnailImgFirst.style.opacity = "0.5";
// Add click event listeners to each thumbnail
thumbnailImgFirst.addEventListener("click", () => handleThumbnailClick(0));
thumbnailImgSecond.addEventListener("click", () => handleThumbnailClick(1));
thumbnailImgThird.addEventListener("click", () => handleThumbnailClick(2));
thumbnailImgFourth.addEventListener("click", () => handleThumbnailClick(3));


// Variables and functions for cycling through images
const images = [firstImg, secondImg, thirdImg, fourthImg];
let currentImage = 0;
// Function to show a specific image based on index
function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}


nextBtn.addEventListener("click", () => {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  showImage(currentImage);
});

previousBtn.addEventListener("click", () => {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  showImage(currentImage);
});

showImage(currentImage); 

// Variables for second set of thumbnails and images
const fifthImg = document.querySelector(".fifth-image");
const sixthImg = document.querySelector(".sixth-image");
const seventhImg = document.querySelector(".seventh-image");
const eighthImg = document.querySelector(".eighth-image");

const thumbnailImg5 = document.querySelector(".thumbnail-img5");
const thumbnailImg6 = document.querySelector(".thumbnail-img6");
const thumbnailImg7 = document.querySelector(".thumbnail-img7");
const thumbnailImg8 = document.querySelector(".thumbnail-img8");

const nextBtn1 = document.getElementById("nextBtn1");
const previousBtn1 = document.getElementById("previousBtn1");

const secondThumbnailImages = [thumbnailImg5, thumbnailImg6, thumbnailImg7, thumbnailImg8];
let currentImageIndex = 0;
// Function to handle click on a thumbnail in the second set
function handleThumbnailClickSecond(clickedIndex2) {
  secondThumbnailImages.forEach((thumbnail, index) => {
    if (index === clickedIndex2) {
      thumbnail.parentElement.classList.add("clicked-div");
      thumbnail.style.opacity = "0.7";
    } else {
      thumbnail.parentElement.classList.remove("clicked-div");
      thumbnail.style.opacity = "";
    }
  });
// Display corresponding image based on clicked thumbnail in the second set
  switch (clickedIndex2) {
    case 0:
      fifthImg.style.display = "block";
      sixthImg.style.display = "none";
      seventhImg.style.display = "none";
      eighthImg.style.display = "none";
      break;
    case 1:
      fifthImg.style.display = "none";
      sixthImg.style.display = "block";
      seventhImg.style.display = "none";
      eighthImg.style.display = "none";
      break;
    case 2:
      fifthImg.style.display = "none";
      sixthImg.style.display = "none";
      seventhImg.style.display = "block";
      eighthImg.style.display = "none";
      break;
    case 3:
      fifthImg.style.display = "none";
      sixthImg.style.display = "none";
      seventhImg.style.display = "none";
      eighthImg.style.display = "block";
      break;
    default:
      break;
  }
  currentImageIndex = clickedIndex2;
  images = [fifthImg,sixthImg , seventhImg  , eighthImg ] 
  images.forEach((image) => {
    image.style.opacity = "0";
    image.classList.add("fade-in-animation");
  });

}

thumbnailImg5.style.opacity = "0.7";
// Add click event listeners to each thumbnail in the second set
thumbnailImg5.addEventListener("click", () => handleThumbnailClickSecond(0));
thumbnailImg6.addEventListener("click", () => handleThumbnailClickSecond(1));
thumbnailImg7.addEventListener("click", () => handleThumbnailClickSecond(2));
thumbnailImg8.addEventListener("click", () => handleThumbnailClickSecond(3));

// Next button click event for the second set
nextBtn1.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % secondThumbnailImages.length;
  handleThumbnailClickSecond(currentImageIndex);
});
// Previous button click event for the second set
previousBtn1.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + secondThumbnailImages.length) % secondThumbnailImages.length;
  handleThumbnailClickSecond(currentImageIndex);
});












