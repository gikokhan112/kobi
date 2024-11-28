// auth.js

// Function to sign up a new user
document.getElementById('signUpBtn').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
            alert('User signed up successfully!');
        })
        .catch((error) => {
            // Handle errors here
            console.error(error.message);
            alert('Error: ' + error.message);
        });
});

// Function to sign in an existing user
document.getElementById('signInBtn').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
            alert('User signed in successfully!');
        })
        .catch((error) => {
            console.error(error.message);
            alert('Error: ' + error.message);
        });
});

// Function to sign out the current user
document.getElementById('signOutBtn').addEventListener('click', function () {
    auth.signOut()
        .then(() => {
            alert('User signed out successfully!');
        })
        .catch((error) => {
            console.error(error.message);
            alert('Error: ' + error.message);
        });
});
