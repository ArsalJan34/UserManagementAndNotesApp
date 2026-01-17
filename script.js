function signUp(){
const name = document.getElementId("name").vlaue;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

auth.createUserWithEmailAndPassword(name, email, password).then( cred => {
  return db.collection("Users1").doc(cred.user.uid).set({
email: email,
isAdmin: False

  });
})
.then(() =>{
  alert("SignUp Successful!");
  window.location.href='login.html';
} )
.catch(err => alert(err.message));
}
