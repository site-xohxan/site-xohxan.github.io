const slider = document.querySelector('#slider');
const slider1 = document.querySelector('#slider-1');
const canvas = document.querySelector('#canvas');
slider.addEventListener('input', handleInputSlider);
slider1.addEventListener('input', handleInputSlider1);
const ctx = canvas.getContext('2d');
const images = [];
window.addEventListener('load', pageLoaded);

function pageLoaded() {
    for (let i = 1; i <= 36; i += 1) {
      const number = i.toString().padStart(2, '00');
      const url = `https://images.stockx.com/360/Air-Jordan-1-High-OG-Spider-Man-Across-the-Spider-Verse/Images/Air-Jordan-1-High-OG-Spider-Man-Across-the-Spider-Verse/Lv2/img${number}.jpg?fm=avif&auto=compress&w=480&dpr=1&updated_at=1683569460&h=320&q=5`;
      const image = new Image();
      image.src = url;
      image.addEventListener('load', () => {
        images[i] = image;
        if (i === 1) {
          loadImage(i);
        }
      });
    }
}

function loadImage(index) {
    ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
}

function handleInputSlider() {
    console.log(this.value);
    loadImage(this.value);
    slider1.value = this.value; // Actualiza el valor del slider-1
}

function handleInputSlider1() {
    console.log(this.value);
    loadImage(this.value);
    slider.value = this.value; // Actualiza el valor del slider
}


var buttons = document.getElementsByClassName("products_list-text-size_ul");
var activeButton = null;
function updateSneakerSize(button) {
        var sneakerSizeElement = document.getElementById("sneaker-size");
        var newSize = button.textContent;
        sneakerSizeElement.textContent = "Sneaker Size: " + newSize;
        if (activeButton !== null) {
            activeButton.classList.remove("active");
        }

        button.classList.add("active");
        activeButton = button;
}


function toggleDivs() {
  var div4 = document.querySelector('.overlay');
  var toggleButton = document.getElementById('toggleButton');

    if (div4.style.display === 'none') {
      div4.style.display = 'flex'; // Cambiamos 'relative' a 'block' para mostrar el div correctamente
      toggleButton.src = 'images-hub/chevron-doble-up.png';
    } 
    else {
      div4.style.display = 'none';
      toggleButton.src = 'images-hub/chevron-doble-abajo.png';
    }
}



/* SCRIPTS CAROUSEL*/ 