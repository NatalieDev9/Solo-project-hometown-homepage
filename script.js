var carouselimages;


carouselimages = [
'/images/Carousel/Carousel1.png', 
'/images/Carousel/Carousel2.png', 
'/images/Carousel/Carousel3.png'];
let element_carouselimages = document.getElementById('carouselimages');
element_carouselimages.setAttribute("src", carouselimages[0]);


document.getElementById('Next').addEventListener('click', (event) => {
  let element_carouselimages2 = document.getElementById('carouselimages');
  carouselimages.push(carouselimages.shift());
  element_carouselimages2.setAttribute("src", carouselimages[0]);

});

document.getElementById('Previous').addEventListener('click', (event) => {
  let element_carouselimages3 = document.getElementById('carouselimages');
  carouselimages.unshift(carouselimages.pop());
  element_carouselimages3.setAttribute("src", carouselimages.slice(-1)[0]);

});