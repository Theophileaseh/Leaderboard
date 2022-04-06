// Fetching Scores from the API
import { createGame, getGamescore, addScore } from './api.js';

export default class Game {
  // eslint-disable-next-line class-methods-use-this
  async create() {
    this.gameId = await createGame();
    this.gameId = this.gameId.replace(/Game with ID: /g, '').replace(/ added./g, '');
    return this.gameId;
  }

  // eslint-disable-next-line class-methods-use-this
  async getScores() {
    const score = await getGamescore(this.gameId);
    return score;
  }

  // eslint-disable-next-line class-methods-use-this
  async addNewscore(userName, userScore) {
    await addScore(userName, userScore, this.gameId);
  }
}