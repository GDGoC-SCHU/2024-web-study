

const images = [
  "forest1.jpg",
  "forest2.jpg",
  "forest3.jpg"
];


const selectedImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${selectedImage}`;

document.body.appendChild(bgImage);
  