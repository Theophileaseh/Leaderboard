import fetch from 'cross-fetch';

const id = 'gxBQaeZ5vylOOYYX0A1P';

const formSubmit = document.querySelector('.form');
const dom = document.querySelector('.score-board');
const refreshBtn = document.querySelector('#refresh');

formSubmit.addEventListener('submit', (event) => {
  event.preventDefault();
  const userName = event.target[0].value;
  const score = event.target[1].value;

  const addScore = async () => {
    const resp = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`, {
      method: 'POST',
      body: JSON.stringify({
        score,
        user: userName,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const respPar = await resp.json();
    return respPar.result;
  };

  return addScore();
});

const results = [];

const getScores = async () => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`)
    .then((response) => response.json())
    .then((data) => (results.push(...data.result)));
  const allScores = results.map((result) => (
    `<div class="single-user-score">
          <p class="result-user">${result.user}:&nbsp;&nbsp;</p>
          <p class="result-score">${result.score}</p>
        </div>`
  )).join('');
  dom.innerHTML = allScores;
};

getScores();

refreshBtn.addEventListener('click', () => {
  window.history.go(0);
});
