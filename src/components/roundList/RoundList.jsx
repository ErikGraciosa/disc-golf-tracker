import React, { useEffect, useState } from 'react';
import Round from './Round';
import { getRounds } from '../../services/roundServices';

function RoundList() {
  const [rounds, setRounds] = useState([]);
  const [loading, setLoading] = useState('true');

  useEffect(() => {
    //write a service to get the array of rounds and set into state.
    getRounds()
      .then(rounds => {
        setRounds(rounds);
        setLoading(false);
      });
  }, []);

  console.log(rounds);

  const roundList = rounds.map(round => 
    <Round key={`${round.location}${round.date}`} {...round}
    />);

  return (
    <div>
      {loading 
        ? 'Sorry still loading' 
        : roundList
      }
    </div>
  );
}

export default RoundList;
