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


function getWinner(cardsA, cardsB) {
  let scoreA = 0;
  let scoreB = 0;
  let hands = [];
  hands.push(cardsA, cardsB)

  hands.forEach(hands => {
    hands.forEach((card, index) => {
      switch(card) {
        case "A":
          hands.splice(index, 1);
          hands.splice(index, 0, 14);
          break;
        case "K":
          hands.splice(index, 1);
          hands.splice(index, 0, 13);
          break;
        case "Q":
          hands.splice(index, 1);
          hands.splice(index, 0, 12);
          break;
        case "J":
          hands.splice(index, 1);
          hands.splice(index, 0, 11);
          break;
        case 0:
          hands.splice(index, 1);
          hands.splice(index, 0, 10);
          break;
        default:
      }
    })
  })

  cardsA.forEach((cardA, indexA) => {
    cardsB.forEach((cardB, indexB) => {
      if(indexA === indexB) {
        if(cardA > cardB) {
          scoreA++;
        }
        if(cardA < cardB) {
          scoreB++;
        }
      }
    })
  })

  return scoreA > scoreB ? 1 : scoreA === scoreB ? 0 : -1
}

export { solution, fibonacci, getWinner };
