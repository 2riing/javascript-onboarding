function problem6(forms) {
  var answer;
  const Patterns = {};

  forms.forEach(([email, nickname]) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      const pattern = nickname.substring(i, i + 2);
    }
    console.log(email, nickname);
  });

  return answer;
}

module.exports = problem6;
