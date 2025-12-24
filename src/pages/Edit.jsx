import React, { useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import { useParams } from "react-router-dom";
import {updateNotes as update,getNoteById} from '../helpers/Notes'
import { useNavigate } from 'react-router-dom';
import '../styles/EditCreate.css'
export const Edit = () => {
  const navigate=useNavigate()  
  const { id } = useParams();
  const note=getNoteById(id)
  console.log(id)
  const[notes,setNotes]=useState(note.content)
  const updateNotes=(e)=>{
    setNotes(e.target.value);
  }
  const updateToNotes=(id,content)=>{
    update(id,content)
    setNotes('')
    navigate('/')
  }
  return (
    <div className='edit-container'>
      <textarea
        name="note"
        id="note"
        cols="30"
        rows="10"
        value={notes}
        onChange={updateNotes}
      ></textarea>
      <br />
      <button onClick={()=>updateToNotes(id,notes)}>
        <DoneIcon />
      </button>
    </div>
  )
}
