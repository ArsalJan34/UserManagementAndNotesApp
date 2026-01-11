const db = firebase.firestore();
const usernote = document.getElementById("usernote");

// Fetch notes
db.collection("UserNotes").get().then(snapshot => {
  snapshot.forEach(doc => {
    const data = doc.data();

    // Create note container
    const noteDiv = document.createElement("div");
    noteDiv.style.border = "1px solid #ccc";
    noteDiv.style.padding = "10px";
    noteDiv.style.margin = "10px 0";

    // Title
    const title = document.createElement("h2");
    title.textContent = data.title;

    // Note
    const note = document.createElement("p");
    note.textContent = data.note;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteNote(doc.id);

    // Append elements
    noteDiv.appendChild(title);
    noteDiv.appendChild(note);
    noteDiv.appendChild(deleteBtn);

    usernote.appendChild(noteDiv);
  });
});
function deleteNote(id) {
  db.collection("UserNotes").doc(id).delete()
    .then(() => {
      alert("Note deleted");
      location.reload(); // refresh notes
    })
    .catch(error => {
      console.error("Error deleting note:", error);
    });
}
