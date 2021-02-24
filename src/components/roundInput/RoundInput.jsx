import React, { useState } from 'react';
import { postRound } from '../../services/roundServices';

function RoundInput() {
  const [date, setDate] = useState(0);
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [strokes, setStrokes] = useState(0);
  const [notes, setNotes] = useState('');
  


  const handleSubmit = (event) => {
    event.preventDefault();
    postRound({
      date,
      location,
      name,
      strokes,
      notes
    });
  };

  return (
    <div>
      Here will be the form
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          value={date}
          placeholder="0"
          onChange={({ target }) => setDate(target.value)}
        ></input>
        <input 
          type="text" 
          value={location}
          placeholder="location"
          onChange={({ target }) => setLocation(target.value)}
        ></input>
        <input 
          type="text" 
          value={name}
          placeholder="name"
          onChange={({ target }) => setName(target.value)}
        ></input>
        <input 
          type="number" 
          value={strokes}
          placeholder="0"
          onChange={({ target }) => setStrokes(target.value)}
        ></input>
        <input 
          type="text" 
          value={notes}
          placeholder="notes"
          onChange={({ target }) => setNotes(target.value)}
        ></input>
        
        <button>Submit</button>
      </form>
    </div>
  );
}

export default RoundInput;