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