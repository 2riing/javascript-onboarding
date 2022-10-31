function problem4(word) {
  var answer = "";
  for (let value of word) {
    const num = value.charCodeAt(0);
    if (65 <= num && num <= 90) {
      answer += String.fromCharCode(155 - num);
    } else if (97 <= num && num <= 122) {
      answer += String.fromCharCode(219 - num);
    } else answer += value;
  }
  return answer;
}

module.exports = problem4;
