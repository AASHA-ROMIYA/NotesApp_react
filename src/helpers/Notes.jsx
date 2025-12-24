let notes = JSON.parse(localStorage.getItem("notes")) || [
  { id: 1, content: "This is my first Note" }
];

function setLocally(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

export const addNote = (note) => {
  notes = [...notes, note];
  setLocally(notes);
  return notes;
};

export const NotesLength = () => notes.length;

// Always return an array
export const getAllnotes = () => {
  const localnotes = JSON.parse(localStorage.getItem("notes"));
  return localnotes || [];  // <-- FIX: default to empty array
};

export const deleteNoteById = (id) => {
  notes = notes.filter(note => note.id !== Number(id));
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

// Always return an array
export const filterNotes = (text) => {
  const allNotes = JSON.parse(localStorage.getItem("notes")) || [];
  return allNotes.filter(note => note.content.toLowerCase().includes(text.toLowerCase()));
};

export const getNoteById = (id) => {
  const allNotes = JSON.parse(localStorage.getItem("notes")) || [];
  return allNotes.find(note => note.id === Number(id));
};
