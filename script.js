
const projectCards = document.querySelectorAll(".project-card");

const maxIndex = projectCards.length - 1;

const prevBtn = document.querySelector(".prev-btn");

const nextBtn = document.querySelector(".next-btn");

const carouselTrack =document.getElementById("projects-carousel");

let currentSlide = 0;

nextBtn.addEventListener("click", () => {
    if (currentSlide === maxIndex) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    carouselTrack.style.transform = "translateX(-" + (currentSlide * 24) + "rem)";
});
 
prevBtn.addEventListener("click", () => {
    if (currentSlide === 0) {
         currentSlide = maxIndex;
    } else {
        currentSlide--;
    }
     carouselTrack.style.transform = "translateX(-" + (currentSlide * 24) + "rem)";
});


const themeCheckbox = document.querySelector("#checkbox");

const bodyElement = document.querySelector("body");

themeCheckbox.addEventListener("change", () => {
    if (themeCheckbox.checked === true) {
        bodyElement.classList.remove("dark-theme");
        bodyElement.classList.add("light-theme");
    } else {
        bodyElement.classList.remove("light-theme");
        bodyElement.classList.add("dark-theme");
    }
})



   const openBtn = document.querySelector(".hero-button");

   const modalWin = document.querySelector(".modal-overlay");

   const closeBtn = document.querySelector(".modal-close-btn");

   openBtn.addEventListener("click", () => {
    modalWin.classList.remove("modal-hidden");
   });

   closeBtn.addEventListener("click", () => {
    modalWin.classList.add("modal-hidden");
   });

   modalWin.addEventListener("click", (e) => {
    if (e.target === modalWin) {
        modalWin.classList.add("modal-hidden");
    }
   })

   window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modalWin.classList.add("modal-hidden");
    }
   })
