const product = [
    {
        id: 0,
        image: 'logof.png',
        title: 'Pizza Chicken',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 1,
        image: 'logof.png',
        title: 'Pizza 4 Cheese',
        price: 90,
        gramaj: 500 + ' g',
    },
    {
        id: 2,
        image: 'logof.png',
        title: 'Pizza Carbonara',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 3,
        image: 'logof.png',
        title: 'Pizza Asort De Carne',
        price: 100,
        gramaj: 500 + ' g',
    },
    {
        id: 4,
        image: 'logof.png',
        title: 'Pizza Capricioasa',
        price: 95,
        gramaj: 500 + ' g', 
    },
    {
        id: 5,
        image: 'logof.png',
        title: 'Blinele Măr-Pui',
        price: 70,
        gramaj: 300 + ' g',
    },
    {
        id: 6,
        image: 'logof.png',
        title: 'Blinele Pui-Ananas',
        price: 75,
        gramaj: 310 + ' g',
    },
    {
        id: 7,
        image: 'logof.png',
        title: 'Blinele Pui-Ciuperci',
        price: 75,
        gramaj: 310 + ' g',
    },
    {
        id: 8,
        image: 'logof.png',
        title: 'Blinele Cu Somon',
        price: 110,
        gramaj: 280 + ' g',
    },
    {
        id: 9,
        image: 'logof.png',
        title: 'Blinele Șuncă-Roșii',
        price: 75,
        gramaj: 300 + ' g',
    },
    {
        id: 10,
        image: 'logof.png',
        title: 'Blinele Bacon Parmezan',
        price: 75,
        gramaj: 285 + ' g',
    },
    {
        id: 11,
        image: 'logof.png',
        title: 'Blinele Brânză Verdeață',
        price: 55,
        gramaj: 210 + ' g',
    },
    {
        id: 12,
        image: 'logof.png',
        title: 'Blinele Nutella-Banana',
        price: 65,
        gramaj: 250 + ' g',
    },
    {
        id: 13,
        image: 'logof.png',
        title: 'Blinele Vișine',
        price: 55,
        gramaj: 250 + ' g',
    },
    {
        id: 14,
        image: 'logof.png',
        title: 'Blinele Frișcă-Portocale',
        price: 55,
        gramaj: 250 + ' g',
    },
    {
        id: 15,
        image: 'logof.png',
        title: 'Sushi Set 2',
        price: 310,
        gramaj: 30 + ' buc',
    },
    {
        id: 16,
        image: 'logof.png',
        title: 'Sushi Set Hinata',
        price: 365,
        gramaj: 38 + ' buc',
    },
    {
        id: 17,
        image: 'logof.png',
        title: 'Plăcintă',
        price: 20,
        gramaj: 120 + ' g',
    },
];

const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

var displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { id, image, title, price ,gramaj} = item;
        return (
            `<div class='box'>
            <a href='${id}.html'>
                        <img class='images' src=${image} loading="lazy">
                <div class='bottom'>
                    <p>${title}</p>
                    <h5> ${gramaj}</h5>
                    <div class='priceb'>
                    <h2>${price}.00 lei</h2></a>
                    <button class='bbb' onclick='addtocart(${JSON.stringify(item)})'><i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
            </div>`
        )
    }).join('')
};

displayItem(categories);

var cart =[];

function addtocart(item){ 
    cart.push(item);
    displaycart(); 
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0;
    let total = 0; // reset total to 0
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Coșul este gol";
        document.getElementById("total").innerHTML = 0+".00 lei";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((item)=>
        {
            var {image, title, price} = item;
            total=total+price;
            document.getElementById("total").innerHTML = total+".00 lei";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:16px;'>${title}</p>
                <h2 style='font-size: 16px;'>${price}.00 lei</h2> <br>
                `+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
                
                
            );
        }).join('');
    } 
}
var displayItemAsString = (items) => {
    return items.map((item) => {
        var { id, image, title, price} = item;
        return `ID: ${id}, Image: ${image}, Title: ${title}, Price: ${price}.00 lei`;
    }).join('\n'); 
};
/*click popup and close popup */

const boxes = document.querySelectorAll('.box');
var popup = document.getElementById('popup');


/*for dropdown*/ 
let bars = document.querySelector('.bars');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

bars.onclick = function(){
    header.classList.toggle('open');
}

const all = document.querySelector('.button-product1');
const Pizza = document.querySelector('.button-product2');
const Sushi = document.querySelector('.button-product3');
const Blinele = document.querySelector('.button-product4');
var a = document.querySelectorAll('.data a');
var box = document.querySelectorAll('.box');

all.addEventListener('click', () => {
    for( i = 0; i < 18; i++ ){
    box[i].classList.remove('active');
    }
})

Pizza.addEventListener('click', () => {
    for( i = 0; i < 18; i++ ){
    box[i].classList.remove('active');
    }
    for( i = 5; i < 18; i++ ){
    box[i].classList.add('active');
    }
})

Sushi.addEventListener('click', () => {
    for( i = 0; i < 18; i++ ){
    box[i].classList.remove('active');
    }
    for( i = 0; i < 15; i++ ){
    box[i].classList.add('active');
    }
    box[17].classList.add('active');
})

Blinele.addEventListener('click', () => {
    for( i = 0; i < 18; i++ ){
    box[i].classList.remove('active');
    }
    for( i = 0; i < 5; i++ ){
    box[i].classList.add('active');
    }
    for( i = 15; i < 18; i++ ){
    box[i].classList.add('active');
    }
    box[17].classList.add('active');
});
/*scroll */
function headerscrolled(){
    var scrollValue = window.scrollY;
    var searchsis = document.querySelector('.searchsis');
    var but = document.querySelector('.buttons');
    var row = document.querySelector('.row');
    console.log(scrollValue)

    if(scrollValue > 75){
        searchsis.classList.add('open');
        but.classList.add('open');
        row.classList.add('open');
    } else{
        searchsis.classList.remove('open');
        but.classList.remove('open');
        row.classList.remove('open');
    }
}

window.addEventListener('scroll', headerscrolled);


const x = document.querySelector('.sidebar h1');
var cartb = document.querySelector('.cart');
let sidebar = document.querySelector('.sidebar');

cartb.addEventListener('click', () => {
    sidebar.classList.add('active');
    if (window.innerWidth <= 500) {
        document.body.style.overflow = 'hidden'; 
    }
})

x.addEventListener('click', () => {
    sidebar.classList.remove('active');
    if (window.innerWidth <= 500) {
        document.body.style.overflow = 'auto'; 
    }
})

function clearCart() {
    cart = []; 
    displaycart(); 
}

function clearParams() {
    document.getElementById("fullName").value = '';
    document.getElementById("adresa").value = '';
    document.getElementById("telefon").value = '';
}

function SendMail() {
    if (cart.length === 0) {
        alert("Coșul este gol");
        return;
    }
    let cartDetails = cart.map(item => `  \n ${item.title} - ${item.price}.00 lei`).join();
    var params = {
        from_name: document.getElementById("fullName").value,
        adresa: document.getElementById("adresa").value,
        telefon: document.getElementById("telefon").value,
        message: "Meniul comandat: " + cartDetails
    }

    emailjs.send("service_fzt9l1q", "template_qnxac9g", params)
        .then(function(res) {
            alert("Așteptați apelul de verificare, în caz că nu este confirmată comanda în 10 minute încercați încă o dată și atât!");
            clearCart();
            clearParams(); 
        })
        .catch(function(error) {
            console.error("Failed to send email: ", error);
            alert("Ceva nu a mers bine");
        });
}

const blurs = document.querySelectorAll('.blur');

blurs.forEach(blur => {
    const img = blur.querySelector("img");

    img.addEventListener('load', function() {
        blur.classList.add("loaded");
    });
});