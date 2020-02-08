//Step1 - Make an array of users
var users = [];

//The first for cycle populates the array with 2 elements (users)
//Into this cycle, I created a way to add dinamycally the Github usernames with prompt
for (var u = 0; u < 3; u++) {

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

//Step2 - Generate rows via Javascript
function injectInfo(responseJson) {

  var table = document.getElementById('myTable');
  var row = table.insertRow(1);

  //This for cycle inserts a new cell in the row created above
  //I dynamically created the ID property for each cell
  for (var c = 0; c < 4; c++) {

    var cell = row.insertCell(c);
    cell.id = `${responseJson.login}_${c}`;

  }

  //Here I created a new ID for each new cell that was dynamically generated
  document.querySelector(`#${responseJson.login}_0`).innerHTML = responseJson.login;
  //document.querySelector(`#${responseJson.login}_1`).innerHTML = responseJson.avatar_url;
  document.querySelector(`#${responseJson.login}_2`).innerHTML = responseJson.bio;

  //Here I appended the img to the avatar variable, in order to show the avatar picture
  var avatar = document.createElement('img');
  var src = document.querySelector(`#${responseJson.login}_1`);
  avatar.src = responseJson.avatar_url;
  src.appendChild(avatar);

  //Here I appended the a element to the url variable, in order to resend people to the github page
  document.querySelector(`#${responseJson.login}_3`).innerHTML = responseJson.html_url;
  var url = document.createElement('a');
  var href = document.querySelector(`#${responseJson.login}_3`);
  url.href = responseJson.html_url;
  var target = document.querySelector(`#${responseJson.login}_3`);
  url.target = '_blank';
  href.appendChild(url);
  target.appendChild(url);

}
