export function createScoreBoard(): Record<string, number> {
  let obj: Record<string, number> = {
    'The Best Ever': 1000000,
  };
  return obj;
}


export function addPlayer(scoreBoard: Record<string, number>, player: string, score: number): Record<string, number> {
  scoreBoard[player] = score;

  return scoreBoard;
}


export function removePlayer(scoreBoard: Record<string, number>, player: string): Record<string, number> {
  delete scoreBoard[player];
  return scoreBoard;
}


export function updateScore(scoreBoard: Record<string, number>, player: string, points: number): Record<string, number> {
  scoreBoard[player] = scoreBoard[player] + points;
  return scoreBoard;
}


export function applyMondayBonus(scoreBoard: Record<string, number>): Record<string, number> {
  for (let i in scoreBoard) {
    scoreBoard[i] = scoreBoard[i] + 100;
  }
  return scoreBoard;
}