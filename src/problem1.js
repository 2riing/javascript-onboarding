// 숫자가 들어오면 각 자리의 수를 더해서 내보내는 함수
function add(number) {
  number_str = number + "";
  let temp = 0;
  for (let i = 0; i < number_str.length; i++) {
    temp += parseInt(number_str[i]);
  }
  return temp;
}

// 숫자가 들어오면 각 자리의 수를 곱해서 내보내는 함수
function multiple(number) {
  number_str = number + "";
  let temp = 1;
  for (let i = 0; i < number_str.length; i++) {
    temp *= parseInt(number_str[i]);
  }
  return temp;
}

// 가장 큰수 check, return 하는 함수
function check(left, right) {
  let numbers = [];
  let max_num = 0;
  numbers.push(add(left), multiple(left), add(right), multiple(right));
  // 가장 큰 수로 갱신해주기
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max_num) {
      max_num = numbers[i];
    }
  }
  return max_num;
}

function problem1(pobi, crong) {
  // 페이지 수가 유효한지 체크
  if (pobi[0] + 1 === pobi[1] && crong[0] + 1 === crong[1]) {
    let pobi_max = check(pobi[0], pobi[1]);
    let crong_max = check(crong[0], crong[1]);
    if (pobi_max === crong_max) {
      return 0;
    } else if (pobi_max > crong_max) {
      return 1;
    } else if (pobi_max < crong_max) {
      return 2;
    }
  } else {
    return -1; // 유효하지 않을경우 리턴
  }
}

module.exports = problem1;
