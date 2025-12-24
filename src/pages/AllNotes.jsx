import AddIcon from '@mui/icons-material/Add';
import {getAllnotes,deleteNoteById,filterNotes} from '../helpers/Notes'
import { Link, useNavigate } from 'react-router-dom';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import { useEffect, useState } from 'react';
import '../styles/AllNotes.css';
export const AllNotes = () => {
  const [allNotes, setAllNotes] = useState([]);
  const [text,setText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setAllNotes(getAllnotes());
  }, []);
  const search=()=>{
    const notes=filterNotes(text);
    setAllNotes(notes)
    setText('')
  }
  const handleDelete=(id)=>{
    setAllNotes(deleteNoteById(id))
  }

  return (
      <div className="notes-container">
        <h1>My Notes App</h1>
        <input
          className="search"
          placeholder="Search note"
          value={text}
          onChange={(event) => setText(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              search();
            }
          }}
        />


       <button className="add-btn">
          <Link to="/create"><AddIcon /></Link>
        </button>
        <div className="notes-grid">
          {allNotes.map(note => (
            <div className="note-card" key={note.id}>
              <p className="note-text">
                {note.content.length > 20
                  ? note.content.slice(0, 20) + "..."
                  : note.content}
              </p>

              <div className="note-actions">
                <button onClick={() => navigate(`/edit/${note.id}`)}>
                  <EditNoteIcon />
                </button>
                <button onClick={() => handleDelete(note.id)}>
                  <DeleteOutlineTwoToneIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        

      </div>
  );
};


