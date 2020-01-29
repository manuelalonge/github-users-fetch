//Step1
var users = [];

for(var i = 0; i < 2; i++) {

    users.push(prompt('Enter your user name', i));

}

for(var user of users){
    fetch(`https://api.github.com/users/${user}`).then((response) => {

        return response.json();  

    }).then((responseJson) => {

        injectInfo(responseJson);
        console.log(responseJson);
    });
}


function injectInfo(responseJson){
    
   /*var table = document.getElementById('myTable');
    var row = table.insertRow(2);
    var cells = [];
   
    for(var cl = 0; cl < 3; cl++) {
        cell = row.insertCell(cl);
        console.log('I did it');                
    }
    */

    document.querySelector('.username__cell').innerHTML = responseJson.login;
    document.querySelector('.avatar__cell').innerHTML = responseJson.avatar_url;
    document.querySelector('.bio__cell').innerHTML = responseJson.bio;

    const avatar = document.createElement('img');
    avatar.appendChild();
    
}





