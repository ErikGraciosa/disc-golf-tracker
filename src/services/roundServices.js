import request from 'superagent';

const API_URL = 'https://discgolftracker.herokuapp.com/api/v1/rounds/';

export const postRound = async(round) => {
  //Refactor this to fetch
  await request.post(API_URL)
    .send(round);
};

export const getRounds = async() => {
  return fetch(API_URL)
    .then((res) => res.json());
  
};
