import React, { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { NotesLength, addNote as addNoteHelper } from '../helpers/Notes';
import { useNavigate } from 'react-router-dom';
import '../styles/EditCreate.css'
export const CreateNotes = () => {
  const [notes, setNotes] = useState('');
 const navigate=useNavigate();
  const handleNotes = (e) => {
    setNotes(e.target.value);
  };

  const addToNotes = () => {
    if(notes.length<=0){
       alert("add content to create notes!!")
    }
    else{
      const note = {
      id: NotesLength() + 1,
      content: notes
    };
    addNoteHelper(note); 
    setNotes('');
    navigate('/')
    }
  };

  return (
    <div className='edit-container'>
      <textarea
        name="note"
        id="note"
        cols="30"
        rows="10"
        value={notes}
        onChange={handleNotes}
      ></textarea>
      <br />
      <button onClick={addToNotes}>
        <DoneIcon />
      </button>
    </div>
  );
};
