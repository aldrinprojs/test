document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const signupError = document.getElementById("signupError");

  signupForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    signupError.textContent = "";

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (!fullname || !email || !password) {
      signupError.textContent = "Please fill in all fields.";
      return;
    }

    try {
      // Create user
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Save extra info in Firestore
      await db.collection("users").doc(user.uid).set({
        fullname,
        email,
        role: "student", // default role
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      alert("Account created successfully!");
      window.location.href = "index.html";

    } catch (error) {
      console.error(error);
      signupError.textContent = error.message;
    }
  });
});
