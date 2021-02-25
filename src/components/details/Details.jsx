import React from 'react';
import PropTypes from 'prop-types';

function Details({ name, strokes, notes }) {
  return (
    <>
      <span>{name}</span><span>{strokes}</span><span>{notes}</span>
      <img src="https://www.placecage.com/c/200/300" alt="Nic"/>
    </>
  );
}

Details.propTypes = {
  name: PropTypes.string.isRequired,
  strokes: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired
};

export default Details;
