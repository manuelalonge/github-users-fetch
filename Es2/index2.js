//Step 1 - create an array of photos
var photos = [];


fetch(`https://picsum.photos/v2/list`).then((response) => {

  return response.json();

}).then((responseJson) => {

  for(let i = 0; i < responseJson.length; i++){
    console.log(responseJson[i]);
  }
  
  //injectInfo(responseJson);

});

//Step 2 - add photos from picsum api via javascript
function injectInfo(responseJson) {



}
