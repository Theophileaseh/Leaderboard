let flag = true;
export function creatHtml(game) {
  const list = document.getElementById('scoreList');
  list.innerHTML = '';
  game.forEach((item) => {
    const listelem = document.createElement('li');
    listelem.className = 'single-score';
    listelem.innerText = `${item.user}: ${item.score}`;
    if (flag === false) {
      listelem.style.background = 'rgb(231 231 231)';
      listelem.style.color = '#120212';
    }
    list.appendChild(listelem);
    flag = !flag;
  });
}

export function creatSubhtml(userName, userScore) {
  const list = document.getElementById('scoreList');
  const listelem = document.createElement('li');
  listelem.className = 'single-score';
  listelem.innerText = `${userName}: ${userScore}`;
  if (flag === false) {
    listelem.style.background = 'rgb(231 231 231)';
    listelem.style.color = '#120212';
  }
  list.appendChild(listelem);
  flag = !flag;
}