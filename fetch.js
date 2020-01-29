/*
Step1
Fare un array di utenti (es. manuelalonge, matteobarone) e fare un ciclo for o while
Prendere ogni utente e fare una chiamata per ogni utente tramite il ciclo
Popolare tabella con due righe

Step2
Generare riga tramite Javascript, così che all'aumentare degli utenti,
aumenteranno le righe in modo dinamico
*/

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





