// <<<<<<< HEAD
// // import axios from "axios";

// // const baseUrl = "https://nand-application.herokuapp.com/";

// // axios.get('/users')
// // .then(function (response) {
// //   // handle success
// //   console.log(response);
// // })
// // .catch(function (error) {
// //     // handle error
// //   console.log(error);
// // })
// // .finally(function () {
// //     // always executed
// // });

// // axios.post('/user', {
// //     firstName: 'Mineo',
// //     lastName: 'Okuda'
// //   })
// //   .then(function (response) {
// //     console.log(response);
// //   })
// //   .catch(function (error) {
// //     console.log(error);
// //   });
// =======
// // import axios from "/frontend/node_modules/axios";

// // const baseUrl = "https://nand-application.herokuapp.com/";
// const baseUrl = "http://127.0.0.1:5501/";

// // router.get('/', (req, res) => {
// //   try {
// // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5501/')
// //       res.status(201).send('ok')
// //   } catch (error) {
// //       console.error(error)
// //   }
// // })

// fetch(baseUrl, {
//   mode: 'cors',
//   credentials: 'include' // ここを追加。
// });

// fetch(baseUrl)
//   .then((result) => {
    
//   })
// >>>>>>> e41d19072a81170d395de69d13a3620d9b855770

// // axios.get('/users')
// // .then(function (response) {
// //     // handle success
// //   console.log(response);
// // })
// // .catch(function (error) {
// //     // handle error
// //   console.log(error);
// // })
// // .finally(function () {
// //     // always executed
// // });

// // axios.post('/user', {
// //     firstName: 'Mineo',
// //     lastName: 'Okuda'
// //   })
// //   .then(function (response) {
// //     console.log(response);
// //   })
// //   .catch(function (error) {
// //     console.log(error);
// //   });


// // function getLocation(options) {
// //   return new Promise((resolve, reject) =>
// //     navigator.geolocation.getCurrentPosition(resolve, reject, options)
// //   );
// // }

// // /**
// //  * 緯度経度をを取得
// //  * @return {Array<number>|null}
// //  */
// // export const getPosition = async () => {
// //   if ("geolocation" in navigator) {
// //     /* geolocation is available */
// //     return getLocation();
// //   } else {
// //     /* geolocation IS NOT available */
// //     return null;
// //   }
// // };

// // export const getAllPosts = async () => {
// //   try {
// //     const res = await axios.get(baseUrl + "posts");
// //     return res.data;
// //   } catch (error) {
// //     alert(error.toString());
// //   }
// // };

// // // jsdoc
// // /**
// //  * 投稿
// //  * @param {string} garigariName
// //  * @param {string} comment
// //  * @param {number} lat
// //  * @param {number} lng
// //  * @param {*} image
// //  * @return {boolean} 成功した場合 true
// //  */
// // export const postToServer = async (garigariName, comment, lat, lng, image) => {
// //   console.log(garigariName, comment, lat, lng, image);
// //   // バリデーション validation
// //   const formData = new FormData();

// //   // formData.append("garigariName", "おれ") // 保留
// //   if (!image.files.length) {
// //     return false;
// //   }
// //   formData.append("comment", comment);
// //   formData.append("lat", lat);
// //   formData.append("lng", lng);
// //   formData.append("image", image.files[0]);
// //   try {
// //     const res = await axios.post(baseUrl + "post", formData, {
// //       headers: { "Content-Type": "multipart/form-data" },
// //     });
// //     console.log(res);
// //     return res;
// //   } catch (error) {
// //     alert(error.toString());
// //   }
// //   // TODO: 投稿する
// //   // バックエンドに投げて npm i axios
// //   // ついでに npm i -D prettier
// //   // 待つ
// //   // TODO: form-data として投稿する
// //   return true;
// // };

// // /**
// //  * 一回いいねする
// //  * @param {number} postId 投稿のID
// //  * @return {boolean} 成功した場合 true
// //  */
// // export const favorite = async (postId) => {
// //   axios
// //     .post(baseUrl + "favorite", null, {
// //       params: { post_id: postId },
// //     })
// //     .then(function (response) {
// //       console.log(response);
// //     });
// //   console.log(postId + "にいいね！");
// //   return true;
// // };