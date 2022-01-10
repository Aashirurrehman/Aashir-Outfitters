const productImages = document.querySelectorAll(".product-images img");
const productImageSlider = document.querySelector(".image-sliders");

let activeImageSlider = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlider].classList.remove('active');
    item.classList.add('active');
    productImageSlider.style.background = `url(${item.src})`;
    activeImageSlider = i;


    } )
    
})

// toggle size buttons

const sizeBtns = document.querySelectorAll(".size-radiobtn");

let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;


    } )
    
})

