import { useState, useEffect, React } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link, useParams, useNavigate } from 'react-router-dom';

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((i) => i.id === id);

  const [title, setTitle] = useState(note ? note.title : '');
  const [details, setDetails] = useState(note ? note.details : '');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDetails(note.details);
    }
  }, [note]);

  const saveChanges = () => {
    if (!note) return; 

    const updatedNotes = notes.map((noteItem) =>
      noteItem.id === id ? { ...noteItem, title, details } : noteItem
    );
    setNotes(updatedNotes);
    navigate('/');
  };

  const deleteNote = () => {
    if (!note) return;

    const filteredNotes = notes.filter((noteItem) => noteItem.id !== id);
    setNotes(filteredNotes);
    navigate('/');
  };

  if (!note) {
    return (
      <div className="view">
        <h2>Note Not Found</h2>
        <Link to="/" className="btn">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="view">
      <h2>Edit Note</h2>
      <header>
        <Link to="/"><IoIosArrowBack /></Link>
        <button className="btn" onClick={saveChanges}>Save</button>
        <button className="btn" onClick={deleteNote}><RiDeleteBin6Line /></button>
      </header>
      <form className="formElement">
        <input
          type="text"
          placeholder="Enter Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter Description..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </form>
    </div>
  );
};

export default EditNote;
