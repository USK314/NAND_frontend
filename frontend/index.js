const area = "気になるエリアを選んでください";
const city = "気になる市町村を選んでください";
const restaurant = "気になる飲食店を選んでください";
const hotel = "気になる宿泊施設を選んでください";
let cardTopTitle = document.getElementById("card-top-title");

function rightButton() {
    if (cardTopTitle.innerHTML === area) {
        cardTopTitle.innerHTML = city;
        leftButtonAppear();
        dotTwo();
    } else if (cardTopTitle.innerHTML === city) {
        cardTopTitle.innerHTML = restaurant;
        skipButtonAppear();
        dotThree();
    } else if (cardTopTitle.innerHTML === restaurant) {
        cardTopTitle.innerHTML = hotel;
        //rightButtonAppear();
        dotFour();
    } else if (cardTopTitle.innerHTML === hotel) {
        confirm_button();
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
        dotThree();
    } else if (cardTopTitle.innerHTML === restaurant) {
        cardTopTitle.innerHTML = city;
        skipButtonAppear();
        dotTwo();
    } else if (cardTopTitle.innerHTML === city) {
        cardTopTitle.innerHTML = area;
        leftButtonAppear();
        dotOne();
    }
}

//確認画面
function confirm_button() {
    
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

//〇
let dot1 = document.getElementById("dot1");
let dot2 = document.getElementById("dot2");
let dot3 = document.getElementById("dot3");
let dot4 = document.getElementById("dot4");

dot1.style.opacity = "100%";
function dotOne() {
    dot1.style.opacity = "100%";
    dot2.style.opacity = "50%";
    dot3.style.opacity = "50%";
    dot4.style.opacity = "50%";
}
function dotTwo() {
    dot2.style.opacity = "100%";
    dot1.style.opacity = "50%";
    dot3.style.opacity = "50%";
    dot4.style.opacity = "50%";
}
function dotThree() {
    dot3.style.opacity = "100%";
    dot1.style.opacity = "50%";
    dot2.style.opacity = "50%";
    dot4.style.opacity = "50%";
}
function dotFour() {
    dot4.style.opacity = "100%";
    dot1.style.opacity = "50%";
    dot3.style.opacity = "50%";
    dot2.style.opacity = "50%";
}

//sidebar
function sidebar() {
    let body = document.body;
    let hamburger = document.getElementById("hamburger");
    // let bg = document.getElementById("bg");

    hamburger.addEventListener('click', function() {
        body.classList.toggle('nav-open');
    });
    // bg.addEventListener('click', function() {
    //     body.classList.remove('nav-open');
    // });
}
sidebar();

function modal_button() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";

}