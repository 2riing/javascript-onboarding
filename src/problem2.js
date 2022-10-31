function problem2(cryptogram) {
  let stack = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; i++) {
    // 마지막 요소와 현재 추가할 요소가 같으면 pop
    if (stack.slice(-1)[0] == cryptogram[i]) {
      stack.pop();
    } else {
      stack = [...stack, cryptogram[i]];
    }
  }

  return stack.join("");
}
module.exports = problem2;
