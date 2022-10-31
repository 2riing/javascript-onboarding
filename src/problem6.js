function problem6(forms) {
  let answer = [];
  const patterns = {};
  const banId = new Set();
  forms.forEach(([email, nickname]) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      const pattern = nickname.substring(i, i + 2);
      if (patterns[pattern]) {
        // 이미 patterns에 있는 중복이라면
        banId.add(email);
        banId.add(patterns[pattern]);
      } else {
        patterns[pattern] = email;
      }
    }
  });
  answer = [...banId].sort();
  return answer;
}

module.exports = problem6;
