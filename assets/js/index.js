const ratingButtons = document.querySelectorAll(".ratingButton");
const secondPart = document.querySelector(".secondPart");
const container = document.querySelector(".container");
const ratingBtnsActive = document.querySelector(".ratingBtnsActive");
const deneme = document.querySelector(".ratingButton:active");

const ourRate = document.querySelector(".ourRate");



const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", function () {
    container.style.display = "none";
    secondPart.style.display = "block";
    const rating = ratingButtons.innerText;
    console.log(rating);
});


for(const x of ratingButtons) {
    x.addEventListener("click",function() {
        ourRate.innerHTML = this.innerText;
    });
};

