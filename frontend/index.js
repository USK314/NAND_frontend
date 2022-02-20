let map;
let marker;
let center = {
    lat: 43.404800, // 緯度
    lng: 142.685883 // 経度
};
let myoptions;


function initMap() {
    //現在地
    // function success(pos) {
    //     let plat = pos.coords.latitude;
    //     let plng = pos.coords.longitude;
    //     center = new google.maps.LatLng(plat, plng); //中心の緯度, 経度
    //     // let pmap = new google.maps.Map(document.getElementById('map'), {
    //     //     zoom: 17,
    //     //     center: platlng
    //     // });
    //     let pmarker = new google.maps.Marker({
    //         position: platlng, //マーカーの位置（必須）
    //         map: map, //マーカーを表示する地図
    //         icon: {
    //             url: "../balloon.svg",
    //             size: new google.maps.Size(66, 100),

    //             //原点
    //             origin: new google.maps.Point(0, 0),

    //             //マーカ位置と画像の接する点
    //             anchor: new google.maps.Point(30, 80),

    //             //画像のサイズ Retina対応のとき設定する
    //             scaledSize: new google.maps.Size(66, 100)
    //         }
    //     });
    // }
    // function fail(error) {
    //     alert('位置情報の取得に失敗しました。エラーコード：' + error.code);
    //     let platlng = new google.maps.LatLng(35.6812405, 139.7649361); //東京駅
    //     let pmap = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 10,
    //         center: platlng
    //     });
    // }
    // navigator.geolocation.getCurrentPosition(success, fail);
    // success();

    //option
    myoptions = {// #sampleに地図を埋め込む
        center: center, // 地図の中心を指定
        zoom: 8, // 地図のズームを指定
        streetViewControl: true,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP,
        }
    };

    map = new google.maps.Map(document.getElementById('map'), myoptions);
}



function hotpepper() {
}


let cityname;
let spotname;
let restname;
let hotelname;


let emarker;
let emarkers = [];

function marker_zoom_area() {
    map.setZoom(8);
}

function marker_zoom_city() {
    map.setZoom(10);
}

function marker_zoom_shop() {
    map.setZoom(13);
}

function marker_delete() {
    for (let i = 0; i < emarkers.length; i++) {
        const element = emarkers[i];
        console.log(i);
        element.setMap(null);
    }
    emarkers = [];
}

function getAreaThenShow() {
    // TODO: APIからJSONデータを取得する↓
    fetch("../AREA.json")
        .then((response) => {
            console.log(response);
            return response.json();//ここでBodyからJSONを返す
        })
        .then((result) => {
            console.log(result);
            result.forEach((point) => {
                emarker = new google.maps.Marker(
                    { // マーカーの追加
                        position: {
                            // TODO: 緯度と経度の取得
                            lat: point.緯度, // 緯度
                            lng: point.経度// 経度, // マーカーを立てる位置を指定
                        },
                        map: map
                    }
                );
                emarkers.push(emarker);
                emarker.addListener('click', function () { // マーカーをクリックしたとき
                    document.getElementById("card-text").innerText = point.name;

                    //マーカーをクリックしたらズームするあれ
                    let elat = point.緯度;
                    let elng = point.経度;
                    map.setCenter(new google.maps.LatLng(elat, elng));
                    map.setZoom(10);

                });  //取得したJSONデータを関数に渡す 
            });
            // TODO: 次のに行ったらmarker全部消さないといけない
        })
        .catch((e) => {
            console.log(e)  //エラーをキャッチし表示     
        })
}


function getSpotThenShow() {
    // TODO: APIからJSONデータを取得する↓
    fetch("../RESAS.json")
        .then((response) => {
            console.log(response);
            return response.json();//ここでBodyからJSONを返す
        })
        .then((result) => {
            console.log(result);
            result.forEach((point) => {
                let emarker = new google.maps.Marker(
                    { // マーカーの追加
                        position: {
                            // TODO: 緯度と経度の取得
                            lat: point.緯度, // 緯度
                            lng: point.経度// 経度, // マーカーを立てる位置を指定
                        },
                        map: map
                    }
                );
                emarkers.push(emarker);
                emarker.addListener('click', function () { // マーカーをクリックしたとき
                    document.getElementById("card-text").innerText = point.スポット名;
                    spotname = point.スポット名;
                    document.getElementById("conspot").innerHTML     = spotname;
                    //マーカーをクリックしたらズームするあれ
                    let elat = point.緯度;
                    let elng = point.経度;
                    map.setCenter(new google.maps.LatLng(elat, elng));
                    map.setZoom(13);

                });  //取得したJSONデータを関数に渡す 
            });
            // TODO: 次のに行ったらmarker全部消さないといけない
        })
        .catch((e) => {
            console.log(e)  //エラーをキャッチし表示     
        })
}

function getCityThenShow() {
    
    // TODO: APIからJSONデータを取得する↓
    fetch("../city_hall.json")
        .then((response) => {
            console.log(response);
            return response.json();//ここでBodyからJSONを返す
        })
        .then((result) => {
            console.log(result);
            result.forEach((point) => {
                emarker = new google.maps.Marker(
                    { // マーカーの追加
                        position: {
                            // TODO: 緯度と経度の取得
                            lat: point.lat, // 緯度
                            lng: point.lon// 経度, // マーカーを立てる位置を指定
                        },
                        map: map // マーカーを立てる地図を指定
                    }
                );
                emarkers.push(emarker);
                emarker.addListener('click', function () { // マーカーをクリックしたとき
                    document.getElementById("card-text").innerText = point.name;

                    //マーカーをクリックしたらズームするあれ
                    let elat = point.lat;
                    let elng = point.lon;
                    map.setCenter(new google.maps.LatLng(elat, elng));
                    map.setZoom(13);

                });  //取得したJSONデータを関数に渡す 
            });
            // TODO: 次のに行ったらmarker全部消さないといけない
        })
        .catch((e) => {
            console.log(e)  //エラーをキャッチし表示     
        })
}

function getRestaurantThenShow() {
    
    // TODO: APIからJSONデータを取得する↓
    fetch("../hotpepper.json")
        .then((response) => {
            console.log(response);
            return response.json();//ここでBodyからJSONを返す
        })
        .then((result) => {
            console.log(result);
            result.results.shop.forEach((point) => {
                emarker = new google.maps.Marker(
                    { // マーカーの追加
                        position: {
                            // TODO: 緯度と経度の取得
                            lat: point.lat, // 緯度
                            lng: point.lng// 経度, // マーカーを立てる位置を指定
                        },
                        map: map // マーカーを立てる地図を指定
                    }
                );
                emarkers.push(emarker);
                emarker.addListener('click', function () { // マーカーをクリックしたとき
                    document.getElementById("card-text").innerText = point.name;
                    restname = point.name;
                    document.getElementById("conrest").innerHTML = restname;
                    //マーカーをクリックしたらズームするあれ
                    let elat = point.lat;
                    let elng = point.lng;
                    map.setCenter(new google.maps.LatLng(elat, elng));
                    map.setZoom(13);

                });  //取得したJSONデータを関数に渡す 
            });
            // TODO: 次のに行ったらmarker全部消さないといけない
        })
        .catch((e) => {
            console.log(e)  //エラーをキャッチし表示     
        })
}

function getHotelThenShow() {
    
    // TODO: APIからJSONデータを取得する↓
    fetch("../rakuten.json")
        .then((response) => {
            console.log(response);
            return response.json();//ここでBodyからJSONを返す
        })
        .then((result) => {
            console.log(result);
            result.hotels.forEach((point) => {
                emarker = new google.maps.Marker(
                    { // マーカーの追加
                        position: {
                            // TODO: 緯度と経度の取得
                            lat: point.hotelBasicInfo.latitude/1000, // 緯度
                            lng: point.hotelBasicInfo.lngitude/10000// 経度, // マーカーを立てる位置を指定
                        },
                        map: map // マーカーを立てる地図を指定
                    }
                );
                emarkers.push(emarker);
                emarker.addListener('click', function () { // マーカーをクリックしたとき
                    document.getElementById("card-text").innerText = point.name;

                    //マーカーをクリックしたらズームするあれ
                    let elat = point.hotelBasicInfo.latitude/1000;
                    let elng = point.hotelBasicInfo.lngitude/10000;
                    map.setCenter(new google.maps.LatLng(elat, elng));
                    map.setZoom(13);

                });  //取得したJSONデータを関数に渡す 
            });
            // TODO: 次のに行ったらmarker全部消さないといけない
        })
        .catch((e) => {
            console.log(e)  //エラーをキャッチし表示     
        })
}




//////////////////////////////////////////////////////////////////////////////////////////
const area = "気になるエリアを選んでください";
const city = "気になる市町村を選んでください";
const spot = "気になるスポットを選んでください"
const restaurant = "気になる飲食店を選んでください";
const hotel = "気になる宿泊施設を選んでください";
let cardTopTitle = document.getElementById("card-top-title");

getAreaThenShow();
function rightButton() {
    if (cardTopTitle.innerHTML === area) {
        cardTopTitle.innerHTML = city;
        leftButtonAppear();
        dotTwo();
        marker_delete();
        getCityThenShow();
        // getSpotThenShow();
        marker_zoom_city();
    } else if (cardTopTitle.innerHTML === city) {
        cardTopTitle.innerHTML = spot;
        skipButtonAppear();
        dotThree();
        marker_zoom_shop();
        marker_delete();
        getSpotThenShow();
    } else if (cardTopTitle.innerHTML === spot) {
        cardTopTitle.innerHTML = restaurant;
        skipButtonAppear();
        dotFour();
        marker_zoom_shop();
        marker_delete();
        getRestaurantThenShow();
    } else if (cardTopTitle.innerHTML === restaurant) {
        cardTopTitle.innerHTML = hotel;
        //rightButtonAppear();
        dotFive();
        marker_zoom_shop();
        marker_delete();
        getHotelThenShow();
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
        //rightButtonAppear();
        dotFive();
        marker_zoom_shop();
        marker_delete();
        getRestaurantThenShow();
    } else if (cardTopTitle.innerHTML === restaurant) {
        cardTopTitle.innerHTML = spot;
        skipButtonAppear();
        dotThree();
        marker_zoom_shop();
        marker_delete();
        getSpotThenShow();
    } else if (cardTopTitle.innerHTML === spot) {
        cardTopTitle.innerHTML = city;
        skipButtonAppear();
        dotTwo();
        marker_zoom_city();
        marker_delete();
        getCityThenShow();
    } else if (cardTopTitle.innerHTML === city) {
        cardTopTitle.innerHTML = area;
        leftButtonAppear();
        dotOne();
        marker_delete();
        getAreaThenShow();
        marker_zoom_area();
    }
}

//確認画面
document.getElementById("confirm").style.display = "none";
function confirm_button() {
    document.getElementById("confirm").style.display = "block";
}

function confirm_return() {
    document.getElementById("confirm").style.display = "none";
}


//
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
let dot5 = document.getElementById("dot5");

dot1.style.opacity = "100%";
function dotOne() {
    dot1.style.opacity = "100%";
    dot2.style.opacity = "50%";
    dot3.style.opacity = "50%";
    dot4.style.opacity = "50%";
    dot5.style.opacity = "50%";
}
function dotTwo() {
    dot2.style.opacity = "100%";
    dot1.style.opacity = "50%";
    dot3.style.opacity = "50%";
    dot4.style.opacity = "50%";
    dot5.style.opacity = "50%";
}
function dotThree() {
    dot3.style.opacity = "100%";
    dot1.style.opacity = "50%";
    dot2.style.opacity = "50%";
    dot4.style.opacity = "50%";
    dot5.style.opacity = "50%";
}
function dotFour() {
    dot4.style.opacity = "100%";
    dot1.style.opacity = "50%";
    dot3.style.opacity = "50%";
    dot2.style.opacity = "50%";
    dot5.style.opacity = "50%";
}
function dotFive() {
    dot5.style.opacity = "100%";
    dot1.style.opacity = "50%";
    dot3.style.opacity = "50%";
    dot2.style.opacity = "50%";
    dot4.style.opacity = "50%";
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
    let modal = document.getElementById("neme_form");
    modal.style.display = "none";

}