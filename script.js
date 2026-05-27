const HTML_OUTPUT = document.getElementById("databaseOutput");
console.log("Running Sal's Strawberries")
//let username2
//let fruit

function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    const Name_field = document.getElementById("name").value;
    const fruitquantity = document.getElementById("fruitQuantity").value;
    console.log("Here")
    console.log(favoriteFruit)
    
    console.log(GLOBAL_user.displayName + " likes " + favoriteFruit + " They have it " + fruitquantity)
firebase.database().ref('/Foods/users/' + GLOBAL_user.uid).update(
{
  favFruit: favoriteFruit,
  quantity : fruitquantity
}
)
   
 HTML_OUTPUT.innerHTML = GLOBAL_user.displayName + " likes " + favoriteFruit + " They have it " + fruitquantity+ " times"
}
 function showEmail(){
    console.log("Reading email");
  firebase.database().ref('/Food').once('value', fb_displayEmail, fb_readError)
 }
 function fb_readError(error) {
    console.log("There was an error reading reading the message");
    console.error(error);
  };
  //unction fb_displayEmail(snapshot){
    //console.log(snapshot.val())
//let Email = snapshot.val()
//console.log("Your favortie fruit is " + Email)
  //}