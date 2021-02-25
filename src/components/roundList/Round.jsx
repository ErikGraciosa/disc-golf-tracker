import React from 'react';
import PropTypes from 'prop-types';

function Round({ location, date, name, strokes, notes }) {
  return (
    <div>
      <details>
        <summary>{location} / {date}</summary>
        <div>Who? {name}</div>
        <div>Score: {strokes}</div>
        <img src="https://www.placecage.com/c/200/300" alt="Nic"/>
        <p>notes: {notes}</p>
      </details>
    </div>
  );
}

Round.propTypes = {
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  strokes: PropTypes.number.isRequired,
  notes: PropTypes.string.isRequired,
};


export default Round;
