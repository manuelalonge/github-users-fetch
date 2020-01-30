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

  //How I am trying to populate the other lines
  var table = document.getElementById('myTable');
  var row = table.insertRow(2);

  for (var c = 0; c < 3; c++) {

    var cell = row.insertCell(c);

  };

  //How to populate one line
  document.querySelector('.username__cell').innerHTML = responseJson.login;
  document.querySelector('.avatar__cell').innerHTML = responseJson.avatar_url;
  document.querySelector('.bio__cell').innerHTML = responseJson.bio;

  var avatar = document.createElement('img');
  var src = document.querySelector('.avatar__cell');
  avatar.src = responseJson.avatar_url;
  src.appendChild(avatar);

}

