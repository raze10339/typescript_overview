import getNotes from "./getNotes";
import outputNotes from "./outputNotes";

function deleteNote(index: string) {
const notesArray = getNotes();
const confirmDelete = confirm('Are you sure you want to delete this note?');
if (confirmDelete) {
    notesArray.splice(Number(index), 1);
localStorage.setItem('notes', JSON.stringify(notesArray));
outputNotes();
}


}
export default deleteNote;