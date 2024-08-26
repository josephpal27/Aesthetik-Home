
// Functionality For Blog Cards Hover Effect
let blogCard = document.querySelectorAll('.blog-card');
let h2 = document.querySelectorAll('.blog-card h2');
let img = document.querySelectorAll('.blog-card .img-div img');

blogCard.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        h2[index].style.color = '#ec9100';
        img[index].style.scale = '1.1';
    })
})
blogCard.forEach((card, index) => {
    card.addEventListener('mouseleave', () => {
        h2[index].style.color = '#000';
        img[index].style.scale = '1';
    })
})


// ----------------------------------------------------------------------------------------------------------------------------------------

// Functionality For Back to Top Btn
let backToTopDiv = document.querySelector(".back-to-top");
let backToTopBtn = document.querySelector(".back-to-top .fa-arrow-up");

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Adjust the pixel value as needed
    backToTopDiv.classList.add("show");
  } else {
    backToTopDiv.classList.remove("show");
  }
});
