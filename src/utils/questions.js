function solution(A) {
  let smallestPositiveNum = 1;

  while(true) {
    let find = A.find(number => number === smallestPositiveNum ? smallestPositiveNum++ : false)
    if(!find) {
      break;
    } 
  } 
  return smallestPositiveNum;
}

function fibonacci() {
  let number = 1;
  const maxNum = 4000000;
  let arr = [];

  while(number <= maxNum) {
    arr.push(number);
    if(arr.length <= 1) {
      number += arr[arr.length - 1]
    } else{
      number += arr[arr.length - 2]
    } 
  }

  const evenNumArr = arr.filter(num => num % 2 === 0);

  return evenNumArr.reduce((a,b) => (a + b))
}

function getWinner(A, B) {
  return "getWinner";
}

export { solution, fibonacci, getWinner };
