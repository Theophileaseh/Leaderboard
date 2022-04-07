import fetch from 'cross-fetch';

export const createGame = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'My ScoreBoard',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const resParse = await res.json();
  return resParse.result;
};

export const getGamescore = async (id) => {
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`);
  const resParse = res.json();
  const scores = await resParse;
  return scores;
};

export const addScore = async (userName, userScore, id) => {
  const resp = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const respPar = await resp.json();
  return respPar.result;
};
