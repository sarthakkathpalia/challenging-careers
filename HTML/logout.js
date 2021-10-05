firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("TB.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
}
