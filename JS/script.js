const   myslide = document.querySelectorAll('.myslider'),
        dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);
let timer = setInterval(autoslide, 8000);
function autoslide(){
    counter += 1;
    slidefun(counter);
}
function plusSlides(n){
    counter += n;
    slidefun(counter);
    resetTimer();
}
function currentSlide(n){
    counter = n;
    slidefun(counter);
    resetTimer();
}
function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}
function slidefun(n){
    let i;
    for(i=0;i<myslide.length;i++){
        myslide[i].style.display ="none";
    }
    for(i=0;i<dot.length;i++){
        dot[i].classList.remove('active');
    }
    if (n>myslide.length) {
        counter=1;
    }
    if (n<1) {
        counter=myslide.length;
    }
    myslide[counter - 1].style.display="block";
    dot[counter - 1].classList.add('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
}

/*Modales*/
//#region
/*modal-1*/
const openModal1 = document.querySelector('#btn1')
const modal1 = document.querySelector('#modal1')
const closeModal1 = document.querySelector('#close__modal1')

openModal1.addEventListener('click', ()=>{
    modal1.classList.add('modal-show');
    document.body.style.overflow='hidden';
})

closeModal1.addEventListener('click', (e)=>{
    e.preventDefault()
    modal1.classList.remove('modal-show');
    document.body.style.overflow = '';
})
/*modal-2*/
const openModal2 = document.querySelector('#btn2')
const modal2 = document.querySelector('#modal2')
const closeModal2 = document.querySelector('#close__modal2')

openModal2.addEventListener('click', ()=>{
    modal2.classList.add('modal-show');
    document.body.style.overflow='hidden';
})

closeModal2.addEventListener('click', (e)=>{
    e.preventDefault()
    modal2.classList.remove('modal-show');
    document.body.style.overflow = '';
})

/*modal-3*/
const openModal3 = document.querySelector('#btn3')
const modal3= document.querySelector('#modal3')
const closeModal3 = document.querySelector('#close__modal3')

openModal3.addEventListener('click', ()=>{
    modal3.classList.add('modal-show');
    document.body.style.overflow='hidden';
})

closeModal3.addEventListener('click', (e)=>{
    e.preventDefault()
    modal3.classList.remove('modal-show');
    document.body.style.overflow = '';
})

/*modal-4*/
const openModal4 = document.querySelector('#btn4')
const modal4= document.querySelector('#modal4')
const closeModal4 = document.querySelector('#close__modal4')

openModal4.addEventListener('click', ()=>{
    modal4.classList.add('modal-show');
    document.body.style.overflow='hidden';
})

closeModal4.addEventListener('click', (e)=>{
    e.preventDefault()
    modal4.classList.remove('modal-show');
    document.body.style.overflow = '';
})

/*modal-5*/
const openModal5 = document.querySelector('#btn5')
const modal5= document.querySelector('#modal5')
const closeModal5 = document.querySelector('#close__modal5')

openModal5.addEventListener('click', ()=>{
    modal5.classList.add('modal-show');
    document.body.style.overflow='hidden';
})

closeModal5.addEventListener('click', (e)=>{
    e.preventDefault()
    modal5.classList.remove('modal-show');
    document.body.style.overflow = '';
})

/*modal-6*/
const openModal6 = document.querySelector('#btn6')
const modal6= document.querySelector('#modal6')
const closeModal6 = document.querySelector('#close__modal6')

openModal6.addEventListener('click', ()=>{
    modal6.classList.add('modal-show');
    document.body.style.overflow='hidden';
})

closeModal6.addEventListener('click', (e)=>{
    e.preventDefault()
    modal6.classList.remove('modal-show');
    document.body.style.overflow = '';
})

/*modal-7*/
const openModal7 = document.querySelector('#btn7')
const modal7= document.querySelector('#modal7')
const closeModal7 = document.querySelector('#close__modal7')

openModal7.addEventListener('click', ()=>{
    modal7.classList.add('modal-show');
    document.body.style.overflow='hidden';
})

closeModal7.addEventListener('click', (e)=>{
    e.preventDefault()
    modal7.classList.remove('modal-show');
    document.body.style.overflow = '';
})

/*modal-8*/
const openModal8 = document.querySelector('#btn8')
const modal8= document.querySelector('#modal8')
const closeModal8 = document.querySelector('#close__modal8')

openModal8.addEventListener('click', ()=>{
    modal8.classList.add('modal-show');
    document.body.style.overflow='hidden';
})

closeModal8.addEventListener('click', (e)=>{
    e.preventDefault()
    modal8.classList.remove('modal-show');
    document.body.style.overflow = '';
})

/*modal-9*/
const openModal9 = document.querySelector('#btn9')
const modal9= document.querySelector('#modal9')
const closeModal9 = document.querySelector('#close__modal9')

openModal9.addEventListener('click', ()=>{
    modal9.classList.add('modal-show');
    document.body.style.overflow='hidden';
})

closeModal9.addEventListener('click', (e)=>{
    e.preventDefault()
    modal9.classList.remove('modal-show');
    document.body.style.overflow = '';
})
//#endregion

/*Galería*/
//#region
const search = document.querySelector('.search-box input');
const images = document.querySelectorAll('.image-box');

search.addEventListener('keyup', () => {
    let searchvalue = search.value.trim().toLowerCase();

    images.forEach((image) => {
        let imageName = image.dataset.name.toLowerCase();
        image.style.display = imageName.includes(searchvalue) || searchvalue === '' ? 'block' : 'none';
    });
});

//Popup Image
document.querySelectorAll('.gallery img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
        document.body.style.overflow='hidden';
    }
});
document.querySelector('.popup-image i').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
    document.body.style.overflow='';
}
//#endregion

//galería de videos
//#region 
let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

listVideo.forEach(video =>{
    video.onclick = () =>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        };
    };
});
//#endregion

//Carrusel de modales
//#region
/*Carrusel de modales 1*/
let currentIndex1 = 0;

document.querySelector('#prev-button1').addEventListener('click', () => {
    navigate1(-1);
});

document.querySelector('#next-button1').addEventListener('click', () => {
    navigate1(1);
});

function navigate1(direction) {
    const galleryContainer1 = document.querySelector('#gallery-container1');
    const totalImages1 = document.querySelectorAll('#gallery-item1').length;
    
    currentIndex1 = (currentIndex1 + direction + totalImages1) % totalImages1;
    const offset1 = -currentIndex1 * 100;
    
    galleryContainer1.style.transform = `translateX(${offset1}%)`;
}

//AUTOPLAY
let autoplayInterval1 = null;

function startAutoplay1(interval) {
    stopAutoplay1();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval1 = setInterval(() => {
        navigate1(1);  // Navega a la siguiente imagen cada intervalo de tiempo.
    }, interval);
}

function stopAutoplay1() {
    clearInterval(autoplayInterval1);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay1(3000);

// Opcional: Detener autoplay cuando el usuario interactúa con los botones de navegación.
/* document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', stopAutoplay);
}); */

/*Carrusel de modales 2*/
let currentIndex2 = 0;

document.querySelector('#prev-button2').addEventListener('click', () => {
    navigate2(-1);
});

document.querySelector('#next-button2').addEventListener('click', () => {
    navigate2(1);
});

function navigate2(direction) {
    const galleryContainer2 = document.querySelector('#gallery-container2');
    const totalImages2 = document.querySelectorAll('#gallery-item2').length;
    
    currentIndex2 = (currentIndex2 + direction + totalImages2) % totalImages2;
    const offset2 = -currentIndex2 * 100;
    
    galleryContainer2.style.transform = `translateX(${offset2}%)`;
}
//AUTOPLAY
let autoplayInterval2 = null;

function startAutoplay2(interval) {
    stopAutoplay2();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval2 = setInterval(() => {
        navigate2(1);  // Navega a la siguiente imagen cada intervalo de tiempo.
    }, interval);
}

function stopAutoplay2() {
    clearInterval(autoplayInterval2);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay2(3000);

/*Carrusel de modales 3*/
let currentIndex3 = 0;

document.querySelector('#prev-button3').addEventListener('click', () => {
    navigate3(-1);
});

document.querySelector('#next-button3').addEventListener('click', () => {
    navigate3(1);
});

function navigate3(direction) {
    const galleryContainer3 = document.querySelector('#gallery-container3');
    const totalImages3 = document.querySelectorAll('#gallery-item3').length;
    
    currentIndex3 = (currentIndex3 + direction + totalImages3) % totalImages3;
    const offset3 = -currentIndex3 * 100;
    
    galleryContainer3.style.transform = `translateX(${offset3}%)`;
}
//AUTOPLAY
let autoplayInterval3 = null;

function startAutoplay3(interval) {
    stopAutoplay3();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval3 = setInterval(() => {
        navigate3(1);  // Navega a la siguiente imagen cada intervalo de tiempo.
    }, interval);
}

function stopAutoplay3() {
    clearInterval(autoplayInterval3);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay3(3000);

/*Carrusel de modales 4*/
let currentIndex4 = 0;

document.querySelector('#prev-button4').addEventListener('click', () => {
    navigate4(-1);
});

document.querySelector('#next-button4').addEventListener('click', () => {
    navigate4(1);
});

function navigate4(direction) {
    const galleryContainer4 = document.querySelector('#gallery-container4');
    const totalImages4 = document.querySelectorAll('#gallery-item4').length;
    
    currentIndex4 = (currentIndex4 + direction + totalImages4) % totalImages4;
    const offset4 = -currentIndex4 * 100;
    
    galleryContainer4.style.transform = `translateX(${offset4}%)`;
}
//AUTOPLAY
let autoplayInterval4 = null;

function startAutoplay4(interval) {
    stopAutoplay4();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval4 = setInterval(() => {
        navigate4(1);  // Navega a la siguiente imagen cada intervalo de tiempo.
    }, interval);
}

function stopAutoplay4() {
    clearInterval(autoplayInterval4);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay4(3000);

/*Carrusel de modales 5*/
let currentIndex5 = 0;

document.querySelector('#prev-button5').addEventListener('click', () => {
    navigate5(-1);
});

document.querySelector('#next-button5').addEventListener('click', () => {
    navigate5(1);
});

function navigate5(direction) {
    const galleryContainer5 = document.querySelector('#gallery-container5');
    const totalImages5 = document.querySelectorAll('#gallery-item5').length;
    
    currentIndex5 = (currentIndex5 + direction + totalImages5) % totalImages5;
    const offset5 = -currentIndex5 * 100;
    
    galleryContainer5.style.transform = `translateX(${offset5}%)`;
}
//AUTOPLAY
let autoplayInterval5 = null;

function startAutoplay5(interval) {
    stopAutoplay5();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval5 = setInterval(() => {
        navigate5(1);  // Navega a la siguiente imagen cada intervalo de tiempo.
    }, interval);
}

function stopAutoplay5() {
    clearInterval(autoplayInterval5);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay5(3000);

/*Carrusel de modales 6*/
let currentIndex6 = 0;
document.querySelector('#prev-button6').addEventListener('click', () => {
    navigate6(-1);
});
document.querySelector('#next-button6').addEventListener('click', () => {
    navigate6(1);
});

function navigate6(direction) {
    const galleryContainer6 = document.querySelector('#gallery-container6');
    const totalImages6 = document.querySelectorAll('#gallery-item6').length;
    currentIndex6 = (currentIndex6 + direction + totalImages6) % totalImages6;
    const offset6 = -currentIndex6 * 100;
    galleryContainer6.style.transform = `translateX(${offset6}%)`;
}
//AUTOPLAY
let autoplayInterval6 = null;

function startAutoplay6(interval) {
    stopAutoplay6();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval6 = setInterval(() => {
        navigate6(1);  // Navega a la siguiente imagen cada intervalo de tiempo.
    }, interval);
}

function stopAutoplay6() {
    clearInterval(autoplayInterval6);
}
// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay6(3000);

/*Carrusel de modales 7*/
let currentIndex7 = 0;
document.querySelector('#prev-button7').addEventListener('click', () => {
    navigate7(-1);
});
document.querySelector('#next-button7').addEventListener('click', () => {
    navigate7(1);
});

function navigate7(direction) {
    const galleryContainer7 = document.querySelector('#gallery-container7');
    const totalImages7 = document.querySelectorAll('#gallery-item7').length;
    currentIndex7 = (currentIndex7 + direction + totalImages7) % totalImages7;
    const offset7 = -currentIndex7 * 100;
    galleryContainer7.style.transform = `translateX(${offset7}%)`;
}
//AUTOPLAY
let autoplayInterval7 = null;

function startAutoplay7(interval) {
    stopAutoplay7();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval7 = setInterval(() => {
        navigate7(1);  // Navega a la siguiente imagen cada intervalo de tiempo.
    }, interval);
}

function stopAutoplay7() {
    clearInterval(autoplayInterval7);
}
// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay7(3000);

/*Carrusel de modales 8*/
let currentIndex8 = 0;
document.querySelector('#prev-button8').addEventListener('click', () => {
    navigate8(-1);
});
document.querySelector('#next-button8').addEventListener('click', () => {
    navigate8(1);
});

function navigate8(direction) {
    const galleryContainer8 = document.querySelector('#gallery-container8');
    const totalImages8 = document.querySelectorAll('#gallery-item8').length;
    currentIndex8 = (currentIndex8 + direction + totalImages8) % totalImages8;
    const offset8 = -currentIndex8 * 100;
    galleryContainer8.style.transform = `translateX(${offset8}%)`;
}
//AUTOPLAY
let autoplayInterval8 = null;

function startAutoplay8(interval) {
    stopAutoplay8();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval8 = setInterval(() => {
        navigate8(1);  // Navega a la siguiente imagen cada intervalo de tiempo.
    }, interval);
}

function stopAutoplay8() {
    clearInterval(autoplayInterval8);
}
// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay8(3000);

/*Carrusel de modales 9*/
let currentIndex9 = 0;
document.querySelector('#prev-button9').addEventListener('click', () => {
    navigate9(-1);
});
document.querySelector('#next-button9').addEventListener('click', () => {
    navigate9(1);
});

function navigate9(direction) {
    const galleryContainer9 = document.querySelector('#gallery-container9');
    const totalImages9 = document.querySelectorAll('#gallery-item9').length;
    currentIndex9 = (currentIndex9 + direction + totalImages9) % totalImages9;
    const offset9 = -currentIndex9 * 100;
    galleryContainer9.style.transform = `translateX(${offset9}%)`;
}
//AUTOPLAY
let autoplayInterval9 = null;

function startAutoplay9(interval) {
    stopAutoplay9();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval9 = setInterval(() => {
        navigate9(1);  // Navega a la siguiente imagen cada intervalo de tiempo.
    }, interval);
}

function stopAutoplay9() {
    clearInterval(autoplayInterval9);
}
// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay9(3000);
//#endregion