const HTML_OUTPUT = document.getElementById("databaseOutput");
console.log("Running Sal's Strawberries")

function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    let fruit = favoriteFruit.value;
    const Name_field = document.getElementById("name").value;
    let username2 = Name_field.value;
    const fruitquantity = document.getElementById("fruitQuantity").value;
    let quantiity = fruitquantity.value;
}
var username = prompt("what is your name ")
var favFood = prompt("Hello  "+username+". What is your favorite fruit?")
console.log(username2 + " likes " + fruit)

firebase.database().ref('/Foods/users/' + username).set(
    favFood
  );

  function fb_write(){

  }