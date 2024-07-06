


let slideImages = document.querySelectorAll('.slides img');

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

let dots = document.querySelectorAll('.dot');

var counter = 0;

next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
        counter = 0;

    }
    else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}


prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;

    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}


function autoSliding(){
    deletInterval = setInterval(timer, 3000);
    function timer(){
        slideNext();
        indicators();
    }
}

autoSliding();

/*const container = document.querySelector('.slide-container1');*/
const buttons = document.querySelector('.buttons');
const dotsContainer1 = document.querySelector('.dotsContainer1');

buttons.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
})

dotsContainer1.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
})

buttons.addEventListener('mouseout', autoSliding);
dotsContainer1.addEventListener('mouseout', autoSliding);



function indicators(){
    for( i = 0; i < dots.length; i++ ){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
    slideImages[counter].style.animation = 'next1 0.1s ease-in-out forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.1s ease-in-out forwards';
    }
    else if( imageId == counter){
    return
    }
    else{
    slideImages[counter].style.animation = 'prev1 0.1s ease-in-out forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.1s ease-in-out forwards';
    }
    indicators();
}
/*for dropdown*/ 
let bars = document.querySelector('.bars');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

bars.onclick = function(){
    header.classList.toggle('open');
}
/*Search bar*/

/*let searchbtn = document.querySelector('.searchbtn');*/

/*let closebtn = document.querySelector('.closebtn');*/

/*let searchbox = document.querySelector('.searchbox');

searchbtn.onclick = function(){
    searchbox.classList.toggle('active');*/
    /*closebtn.classList.toggle('active');*/
    /*searchbtn.classList.toggle('active');
}*/

/*pop up*/ 

/*NO POPUP */

/*Header scrolled*/
function headerscrolled(){
    var scrollValue = window.scrollY;
    var header = document.querySelector('.header');
    var bars = document.querySelector('.fa-bars');
    var TEXT = document.querySelector('.TEXT');
    console.log(scrollValue)

    if(scrollValue > 100){
        header.classList.add('active');
        bars.classList.add('active');
        TEXT.classList.add('active');
    } else{
        header.classList.remove('active');
        bars.classList.remove('active');
        TEXT.classList.remove('active');
    }
}

window.addEventListener('scroll', headerscrolled);

/*scroll animation*//*
const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
    }
    });
});

const elementeas = document.querySelectorAll('.hidden'); 
elementeas.forEach((el) => observer.observe(el));

if (window.innerWidth < 890) {
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Stop observing the element after adding 'show' class
            observer.unobserve(entry.target);
        }
        // Removed the part that removes 'show' class
    });
});

const elementeas = document.querySelectorAll('.hidden'); 
elementeas.forEach((el) => observer.observe(el));
}
*/
if (window.innerWidth > 890) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const elementeas = document.querySelectorAll('.hidden, .hidden1, .hidden3');
    elementeas.forEach((el) => observer.observe(el));

} else {
    const elementeas = document.querySelectorAll('.hidden, .hidden1, .hidden3');
    elementeas.forEach((el) => {
        el.classList.add('show');
    });
}
/*
const elementeas = document.querySelectorAll('.hidden, .hidden1, .hidden3');

if (window.innerWidth > 890) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    elementeas.forEach((el) => observer.observe(el));

} else {
    elementeas.forEach((el) => {
        el.classList.add('show');
    });
}
*/
const link1 = document.querySelector('.prdivi .div1i a');
const link2 = document.querySelector('.prdivi .div2i a');
const link3 = document.querySelector('.prdivi .div3i a');

const image1 = document.querySelector('.prdivi .div1i img');
const image2 = document.querySelector('.prdivi .div2i img');
const image3 = document.querySelector('.prdivi .div3i img');

link1.addEventListener('mouseover', function(){
    image1.style.transform = 'scale(1.1)';
});

link1.addEventListener('mouseout', function(){
    image1.style.transform = 'scale(1)';
});

link2.addEventListener('mouseover', function(){
    image2.style.transform = 'scale(1.1)';
});

link2.addEventListener('mouseout', function(){
    image2.style.transform = 'scale(1)';
});

link3.addEventListener('mouseover', function(){
    image3.style.transform = 'scale(1.1)';
});
link3.addEventListener('mouseout', function(){
    image3.style.transform = 'scale(1)';
});
