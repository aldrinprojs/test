document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginError = document.getElementById("loginError");

  loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    loginError.textContent = "";

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      loginError.textContent = "Please fill in all fields.";
      return;
    }

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Check user record
      const doc = await db.collection("users").doc(user.uid).get();
      if (doc.exists) {
        // Redirect to dashboard
        window.location.href = "dashboard.html";
      } else {
        loginError.textContent = "User record not found in Firestore.";
      }

    } catch (error) {
      console.error(error);
      loginError.textContent = error.message; // show exact Firebase error
    }
  });
});
