setTimeout(function () {
    alert("Selamat Datang di Toko Sepatu Retro");
}, 3000);

const heroText = document.querySelector("#hero h2");
const colors = ["#FF5733", "#33FF57", "#3357FF"];
let colorIndex = 0;

function changeHeroTextColor() {
    heroText.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeHeroTextColor, 2000);

let currentImageIndex = 0;

const images = ["img/nike-5.jpg", "img/nike-50.jpg", "img/shoes-82.jpg"]

function changeHeroImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.querySelector(
      "#hero"  
    ).style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

setInterval(changeHeroImage, 2000);

const productImages = document.querySelectorAll(".product-card img");

productImages.forEach((image) => {
    image.addEventListener("click", () => {
        image.style.transform = "scale(1.5)";
        image.style.transition = "transform 0.5s";
    });

    image.addEventListener("mouseleave", () => {
        image.style.transform = "scale(1)";
    });
});

