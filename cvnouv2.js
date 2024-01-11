
/*
let search = document.querySelector(".search");

let clear = document.querySelector(".clear");

search.onclick = function(){
      document.querySelector(".container").classList.toggle('active');
}
clear.onclick = function(){
      document.getElementById("search").value = "";
}
*/
/*
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if( counter > 4){
        counter = 1;
    }
} ,5000);*/





let slideImages = document.querySelectorAll('img');

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
    deletInterval = setInterval(timer, 2000);
    function timer(){
        slideNext();
        indicators();
    }
}

autoSliding();

const container = document.querySelector('.slide-container1');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
})

container.addEventListener('mouseout', autoSliding);

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
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if( imageId == counter){
    return
    }
    else{
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
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

let searchbtn = document.querySelector('.searchbtn');

let closebtn = document.querySelector('.closebtn');

let searchbox = document.querySelector('.searchbox');

searchbtn.onclick = function(){
    searchbox.classList.toggle('active');
    closebtn.classList.toggle('active');
    searchbtn.classList.toggle('active');
}

closebtn.onclick = function(){
    searchbox.classList.toggle('active');
    closebtn.classList.toggle('active');
    searchbtn.classList.toggle('active');
}