console.log("Firebase workshop 22 03 2019");

  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyAuPKTRW795TTeV2RDE63XoIrCOOAzf2cM",
    authDomain: "checkpointfirebase.firebaseapp.com",
    databaseURL: "https://checkpointfirebase.firebaseio.com",
    projectId: "checkpointfirebase",
    storageBucket: "checkpointfirebase.appspot.com",
    messagingSenderId: "37769483536",
    appId: "1:37769483536:web:775d47e6a6cd33e6"
  };
  firebase.initializeApp(firebaseConfig);

  // create a collection(NoSQL) (table (SQL)) in our Firabase database
  var users = firebase.database().ref();




document.getElementById("submit").addEventListener('click', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    
    sauvegarderUtilisateur(firstName, lastName,age, email);

    alertUser();
    
    document.getElementById("formulaire").reset();


}

function sauvegarderUtilisateur(firstName, lastName, age, email) {
    var newUser = users.push();
    newUser.set({
        prenom: firstName,
         nom: lastName,
         age: age,
         adresse: email
    }) 
}

function alertUser() {
    document.getElementById("alert").style.display = "block";
    setTimeout(function(){ 
        document.getElementById("alert").style.display = "none"; 
    } , 3000)
}
