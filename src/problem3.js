function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let num = i + "";
    console.log(num);
    for (let j = 0; j < num.length; j++) {
      if (num[j] == 3 || num[j] == 6 || num[j] == 9) {
        answer += 1;
      }
    }
  }
  return answer;
}

module.exports = problem3;
