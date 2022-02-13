const area = "気になるエリアを選んでください";
const city = "気になる市町村を選んでください";
const restaurant = "気になる飲食店を選んでください";
const hotel = "気になる宿泊施設を選んでください";
let cardTopTitle = document.getElementById("card-top-title");

function rightButton() {
    if (cardTopTitle.innerHTML === area) {
        cardTopTitle.innerHTML = city;
        leftButtonAppear();
    } else if (cardTopTitle.innerHTML === city) {
        cardTopTitle.innerHTML = restaurant;
        skipButtonAppear();
    } else if (cardTopTitle.innerHTML === restaurant) {
        cardTopTitle.innerHTML = hotel;
        rightButtonAppear();
    }
}

function skipButton() {
    if (cardTopTitle.innerHTML === restaurant) {
        cardTopTitle.innerHTML = hotel;
        rightButtonAppear();
    }
}

function leftButton() {
    if (cardTopTitle.innerHTML === hotel) {
        cardTopTitle.innerHTML = restaurant;
        rightButtonAppear();
    } else if (cardTopTitle.innerHTML === restaurant) {
        cardTopTitle.innerHTML = city;
        skipButtonAppear();
    } else if (cardTopTitle.innerHTML === city) {
        cardTopTitle.innerHTML = area;
        leftButtonAppear();
    }
}

document.getElementById("skip").style.display = "none";
document.getElementById("left-button").style.display = "none";
function skipButtonAppear() {
    let skip = document.getElementById("skip");
    if (skip.style.display === "none") skip.style.display = "block";
    else skip.style.display = "none";
}
function leftButtonAppear() {
    let left = document.getElementById("left-button");
    if (left.style.display === "none") left.style.display = "block";
    else left.style.display = "none";
}

function rightButtonAppear() {
    let right = document.getElementById("right-button");
    if (right.style.display === "none") right.style.display = "block";
    else right.style.display = "none";
}

//sidebar
function sidebar() {
    let body = document.body;
    let hamburger = document.getElementById("hamburger");
    let bg = document.getElementById("bg");

    hamburger.addEventListener('click', function() {
        body.classList.toggle('nav-open');
    });
    bg.addEventListener('click', function() {
        body.classList.remove('nav-open');
    });
}
sidebar();