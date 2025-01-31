// Create Note.js 
import React,{useState} from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link,useNavigate } from 'react-router-dom'
import {v4 as uuid} from 'uuid'
import "./CreateNote.css"
import UseCreateDate from '../components/UseCreateDate'
const CreateNote = ({setNotes}) => {
  const [title,setTitle]=useState('');
  const [details,setDetails]=useState('');
  const date=UseCreateDate();
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(title && details){
      const note={id:uuid(),title,details,date} // same as const note = { id: uuid(), title: title, detail: detail };
      setNotes(prev=>[note,...prev])
      navigate('/')
      console.log(note)
    }
  }
  return (
    <div className='view'>
      <h2>Create a New Note</h2>
      <header>
        
        <Link to="/"><IoIosArrowBack/></Link>
        <button className="btn" onClick={handleSubmit}>Save</button>
      </header>
      <form className='formElement'>
      <input type="text" placeholder='Enter title...' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <textarea type="text" placeholder='Enter description...' value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
    </form>

    </div>
  )
}
export default CreateNote
