import request from 'superagent';

export const postRound = async(round) => {
  await request.post('https://discgolftracker.herokuapp.com/api/v1/rounds/')
    .send(round);
};
