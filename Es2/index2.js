//Step 1 - create an array of photos
var photos = [];

fetch(`https://picsum.photos/v2/list`).then((response) => {

  return response.json();

}).then((responseJson) => {

  //injectInfo(responseJson);
  console.log(responseJson);

});


//Step 2 - add photos from picsum api via javascript
function injectInfo(responseJson) {

  document.querySelector(`#${responseJson.author}_0`).innerHTML = responseJson.download_url;
  var photo = document.createElement('img');
  var src = document.querySelector(`#${responseJson.download_url}_1`);
  photo.src = responseJson.download_url;
  src.appendChild(photo);

}








