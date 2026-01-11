function Add(){
const title = document.getElementById("title").value;
const note = document.getElementById("note").value;

if (!title || !note)
  alert("Fill the fields completely!");

db.collection('UserNotes').add({title, note}).then(() =>{
  alert("Note Added");
  location.reload();
});
}
function check(){
 window.location.href = "notes.html";
}
