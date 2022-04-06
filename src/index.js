// import _ from '/lodash'; // eslint-disable-line

import './style.css';
import Game from './modules/leaderScore.js';
import { creatHtml, creatSubhtml } from './modules/dom.js';

const newGame = new Game();
const creatGame = document.getElementById('refresh');
creatGame.addEventListener('click', async () => {
  await newGame.create();
});

const refreshButt = document.getElementById('refresh');
refreshButt.addEventListener('click', async () => {
  const scores = await newGame.getScores();
  creatHtml(scores.result);
});

const submButt = document.getElementById('submitBtn');
submButt.addEventListener('click', async (e) => {
  e.preventDefault();
  const userName = document.getElementById('username');
  const userScore = document.getElementById('userscore');
  creatSubhtml(userName.value, userScore.value);
  await newGame.addNewscore(userName.value, userScore.value);
  userName.value = '';
  userScore.value = '';
});