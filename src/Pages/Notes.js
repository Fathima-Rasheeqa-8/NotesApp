import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import NoteItem from '../components/NoteItem.js';
import { Link } from 'react-router-dom';
import './Notes.css';

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false); // Toggle search box
  const [searchQuery, setSearchQuery] = useState(''); // Store search input

  // Filter notes based on the search query (case insensitive)
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.details.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="view">
      <section>
        <header className="notes__header">
          <h2>My Notes</h2>
          {showSearch && (
            <input
              type="text"
              placeholder="Search notes..."
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          )}
          <button className="btn" onClick={() => setShowSearch(!showSearch)}>
            <FaSearch />
          </button>
        </header>

        <div className="notes__container">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => <NoteItem key={note.id} note={note} />)
          ) : (
            <p className="no-notes">No matching notes found.</p>
          )}
        </div>

        <Link to="/create-note" className="add-note">
          <FaPlus />
        </Link>
      </section>
    </div>
  );
};

export default Notes;
