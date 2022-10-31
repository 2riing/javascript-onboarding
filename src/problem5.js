// greedy 문제

function problem5(money) {
  const wons = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let bucket = new Array(9).fill(0);
  const answer = wons.map((won) => {
    const cnt = Math.floor(money / won);
    money -= cnt * won;
    return cnt;
  });
  console.log(bucket);

  return answer;
}

module.exports = problem5;
