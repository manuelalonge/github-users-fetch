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

  var table = document.getElementById('myTable');
  var row = table.insertRow(1);

  for (var c = 0; c < 2; c++) {

    var cell = row.insertCell(c);
    cell.id = `${responseJson.author}_${c}`;

  }

  document.querySelector(`#${responseJson.author}_0`).innerHTML = responseJson.download_url;
  var photo = document.createElement('img');
  var src = document.querySelector(`#${responseJson.author}_1`);
  photo.src = responseJson.download_url;
  src.appendChild(photo);

}








