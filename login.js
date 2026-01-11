
    function LogIn() {
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      auth.signInWithEmailAndPassword(email, password)
        .then((cred) => {
          console.log("Logged in:", cred.user.email);

          db.collection('User1').doc(cred.user.uid).get()
            .then(doc => {
              if (doc.exists && doc.data().isAdmin === true) {
                window.location.href = "admin.html";
              } else {
                window.location.href = "main.html";
              }
            });
        })
        .catch((error) => {
          console.error(error.code, error.message);
          alert(error.message);
        });
    }
