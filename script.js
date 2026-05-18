const HTML_OUTPUT = document.getElementById("databaseOutput");
console.log("Running Sal's Strawberries")

function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
}
var username = prompt("what is your name ")
var favFood = prompt("Hello  "+username+". What is your favorite fruit?")
console.log(username + " likes " + favFood)

firebase.database().ref('/Food/users/' + username).set(
    favFood
  );