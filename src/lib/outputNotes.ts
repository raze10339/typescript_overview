import getNotes from './getNotes';


function outputNotes() {

    const notesArray = getNotes();

   const noteOutput = document.querySelector<HTMLElement >('#note-output');

   if (!notesArray.length && noteOutput) {
    noteOutput.innerHTML = '<p>No notes have been added...</p>';
   } else if (notesArray.length && noteOutput) {
    noteOutput.innerHTML='';
    }
   
    for (let index = 0; index < notesArray.length; index++) {
        const noteObj = notesArray[index];
    
        noteOutput?.insertAdjacentHTML('beforeend', `
          <article class="mb-4">
            <h3>${noteObj.text}</h3>
            <p>Added On: ${noteObj.date}</p>
            <button data-color="purple" data-mood="stressed" data-index="${index}" class="btn btn-danger">Delete</button>
            <hr>
          </article>
        `);
      }
   

    
}

export default outputNotes;