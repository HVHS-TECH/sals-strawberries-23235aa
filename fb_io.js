/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
 function fb_login(){
    authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}
function fb_handleLogin(_user){
    if(_user){
        console.log("User is logged in")
        GLOBAL_user = _user;
    } else{
        console.log("User is NOT logged in - Starting the popup process")
        fb_popupLogin();
    }
}
 function fb_popupLogin(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
        GLOBAL_user = result.user; //Save the user details object to a global variable
        console.log("User has logged in")
    });
}