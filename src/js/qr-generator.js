const qrContainer = document.getElementById('qrContainer');

// Fetch students from Firestore
db.collection("users").where("role", "==", "student").get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      const student = doc.data();
      const div = document.createElement("div");
      div.classList.add("qrcode-card");

      const title = document.createElement("p");
      title.textContent = `${student.fullname} (${doc.id})`;
      div.appendChild(title);

      const canvas = document.createElement("canvas");
      div.appendChild(canvas);

      // Generate QR code with student ID
      QRCode.toCanvas(canvas, doc.id, function (error) {
        if (error) console.error(error);
      });

      qrContainer.appendChild(div);
    });
  })
  .catch(err => console.error("Error fetching students: ", err));
