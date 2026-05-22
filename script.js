const HTML_OUTPUT = document.getElementById("databaseOutput");
console.log("Running Sal's Strawberries")
//let username2
//let fruit

function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit");
    let fruit = favoriteFruit.value;
    const Name_field = document.getElementById("name");
    let username2 = Name_field.value;
    const fruitquantity = document.getElementById("fruitQuantity");
    let quantiity = fruitquantity.value;
    console.log("Here")
    console.log(fruit)
    
    console.log(username2 + " likes " + fruit)
firebase.database().ref('/Foods/users/' + username2).set(
    fruit
 );
 HTML_OUTPUT.innerHTML = username2 + " likes " + fruit
}
 function showEmail(){
    console.log("Reading email");
  firebase.database().ref('/Food').once('value', fb_displayEmail, fb_readError)
 }
 function fb_readError(error) {
    console.log("There was an error reading reading the message");
    console.error(error);
  };
  function fb_displayEmail(snapshot){
    console.log(snapshot.val())
//let Email = snapshot.val()
console.log("Your favortie fruit is " + Email)
  }