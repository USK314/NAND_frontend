let map;
let marker;
let center = {
    lat: 43.0, // 緯度
    lng: 141.3 // 経度
};

function initMap() {
    //現在地
	function success(pos) {
		let plat = pos.coords.latitude;
		let plng = pos.coords.longitude;
		let platlng = new google.maps.LatLng(plat, plng); //中心の緯度, 経度
		let pmap = new google.maps.Map(document.getElementById('map'), {
			zoom: 17,
			center: platlng
		});
		let pmarker = new google.maps.Marker({
			position: platlng, //マーカーの位置（必須）
			map: pmap, //マーカーを表示する地図
            icon: {
                url: "../balloon.svg",
                size: new google.maps.Size(66, 100),

                //原点
                origin: new google.maps.Point(0, 0),
    
                //マーカ位置と画像の接する点
                anchor: new google.maps.Point(30, 80),
    
                //画像のサイズ Retina対応のとき設定する
                scaledSize: new google.maps.Size(66, 100)
            }
		});
	}
	function fail(error) {
		alert('位置情報の取得に失敗しました。エラーコード：' + error.code);
		let platlng = new google.maps.LatLng(35.6812405, 139.7649361); //東京駅
		let pmap = new google.maps.Map(document.getElementById('map'), {
			zoom: 10,
			center: platlng
		});
	}
	navigator.geolocation.getCurrentPosition(success, fail);
    //option
    let myOptoins = {// #sampleに地図を埋め込む
        center: center, // 地図の中心を指定
        zoom: 10, // 地図のズームを指定
        streetViewControl: true,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.RIGHT_TOP,
        }
    }

    map = new google.maps.Map(document.getElementById('map'), myOptoins
    );
}

function getAreaThenShow() {
    // TODO: APIからJSONデータを取得する↓
    fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => {
            console.log(response);
            return response.json();//ここでBodyからJSONを返す
        })
        .then((result) => {
            console.log(result);
            result.forEach((point) => {
                marker = new google.maps.Marker({ // マーカーの追加
                    position: {
                        // TODO: 緯度と経度の取得
                        lat: 43.0 + point.id / 100, // 緯度
                        lng: 141.3 // 経度, // マーカーを立てる位置を指定
                    },
                    map: map // マーカーを立てる地図を指定
                });
                marker.addListener('click', function() { // マーカーをクリックしたとき
                    document.getElementById("card-text").innerText = point.title;
                });  //取得したJSONデータを関数に渡す 
            });
            // TODO: 次のに行ったらmarker全部消さないといけない

        })
        .catch((e) => {
            console.log(e)  //エラーをキャッチし表示     
        })
}
getAreaThenShow();


function getCityThenShow() {

}

function getRestaurantThenShow() {

}

function getHotelThenShow() {

}