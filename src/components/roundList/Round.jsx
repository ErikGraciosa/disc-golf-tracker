import React from 'react';
import PropTypes from 'prop-types';

function Round({ location, date, name, strokes, notes }) {
  return (
    <div>
      <details>
        <summary>{location} / {date}</summary>
        <div>Who? {name}</div>
        <div>Score: {strokes}</div>
        <p>Picture</p>
        <p>notes: {notes}</p>
      </details>
    </div>
  );
}

Round.propTypes = {
  location: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  strokes: PropTypes.number.isRequired,
  notes: PropTypes.string.isRequired,
};


export default Round;
