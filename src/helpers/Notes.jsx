
let notes = JSON.parse(localStorage.getItem("notes")) || [
  {
    id: 1,
    content: "This is my first Note"
  }
];

function setLocally(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}
export const addNote = (note) => {
  notes = [...notes, note];
  setLocally(notes);
  return notes;
};

export const NotesLength = () => {
  return notes.length;
};

export const getAllnotes = () => {
  const localnotes=JSON.parse(localStorage.getItem('notes'));
  return localnotes
};

export const deleteNoteById = (id) => {
  notes = notes.filter(note => note.id !== Number(id));
  console.log(notes)
  setLocally(notes);
  return notes;
};

export const updateNotes = (id, newContent) => {
  notes = notes.map(note =>
    note.id === Number(id)
      ? { ...note, content: newContent }
      : note
  );
  setLocally(notes);
  return notes;
};
export const filterNotes = (text) => {
  return notes.filter(note => note.content.toLowerCase().includes(text.toLowerCase()));
}


export const getNoteById = (id) => {
  return notes.find(note => note.id === Number(id));
};
