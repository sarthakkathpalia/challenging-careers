document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace("logout.html")
    }
})

function login() {
    const email = document.getElementById("exampleInputEmail1").value
    const password = document.getElementById("exampleInputPassword1").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
    document.getElementById("error").innerHTML = error.message
    })
}

function signUp(){
    const email = document.getElementById("exampleInputEmail1").value
    const password = document.getElementById("exampleInputPassword1").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function forgotPass(){
    const email = document.getElementById("exampleInputEmail1").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}