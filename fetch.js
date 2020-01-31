//Step1
var users = [];

for (var i = 0; i < 2; i++) {

  users.push(prompt('Enter your Github user name'));

}

for (var user of users) {
  fetch(`https://api.github.com/users/${user}`).then((response) => {

    return response.json();

  }).then((responseJson) => {

    console.log(responseJson);
    injectInfo(responseJson);

  });
}

//Step2
function injectInfo(responseJson) {

  var table = document.getElementById('myTable');
  var row = table.insertRow(2);

  for (var c = 0; c < 3; c++) {

    var cell = row.insertCell(c);
    cell.id = `${responseJson.login}_${c}`;

  }

  document.querySelector(`#${responseJson.login}_0`).innerHTML = responseJson.login;
  document.querySelector(`#${responseJson.login}_1`).innerHTML = responseJson.avatar_url;
  document.querySelector(`#${responseJson.login}_2`).innerHTML = responseJson.bio;

  var avatar = document.createElement('img');
  var src = document.querySelector(`#${responseJson.login}_1`);
  avatar.src = responseJson.avatar_url;
  src.appendChild(avatar);

}
