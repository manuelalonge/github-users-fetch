//Step 1 - create an array of photos
var users = [];

// asking the number of users
const numberOfUsers = prompt('How many users do you want?', '3');
// cast to integer the input or default to 1 if errors
const numberOfUsersInteger = parseInt(numberOfUsers) || 1;

for (var u = 0; u < numberOfUsersInteger; u++) {

  users.push(prompt('Enter your Unsplash user name'));

}

for (var user of users) {
  fetch(`https://source.unsplash.com/user/${user}`).then((response) => {

    return response.json();

  }).then((responseJson) => {

    console.log(responseJson);
    //injectInfo(responseJson);

  });
}


//Step 2 - add photos from picsum api via javascript
function injectInfo(responseJson) {



}
