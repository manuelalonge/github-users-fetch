//Step 1 - create an array of photos
var photos = [];


fetch(`https://picsum.photos/v2/list`).then((response) => {

  return response.json();

}).then((responseJson) => {

  for (let i = 0; i < responseJson.length; i++) {
    console.log(responseJson[i]);
  }

  //injectInfo(responseJson);

});

//Step 2 - add photos from picsum api via javascript
function injectInfo(responseJson) {

  var table = document.getElementById('myTable');
  var row = table.insertRow(1);

  for (var c = 0; c < 2; c++) {

    var cell = row.insertCell(c);
    cell.id = `${responseJson.author}_${c}`;

  }



}
