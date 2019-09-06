/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const entry = document.querySelector(".carousel-container");
entry.appendChild(carouselCreater())
console.log()
function carouselCreater() {
  const carousel = document.createElement("div"),
    lefetbutton = document.createElement("div"),
    img = document.createElement("img"),
    imgc = document.createElement("img"),
    imgt = document.createElement("img"),
    imgtu = document.createElement("img"),
    rightbutton = document.createElement("div");

  carousel.classList.add(lefetbutton);
    carousel.classList.add(img);
  carousel.classList.add(imgc);
  carousel.classList.add(imgt);
  carousel.classList.add(imgtu);
  carousel.classList.add(rightbutton);
  

  
  img.src = "./assets/carousel/mountains.jpeg" ;
    img.src = "./assets/carousel/computer.jpeg" ;
  img.src = "./assets/carousel/trees.jpeg";
  img.src = "./assets/carousel/turntable.jpeg" ;
  

 

  // card.appendChild(headLine);
  // card.appendChild(author);
  // author.appendChild(imgdiv);
  // imgdiv.appendChild(img);
  // author.appendChild(span);

  return carousel;
}
