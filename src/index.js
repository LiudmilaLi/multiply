module.exports = function multiply(first, second) {
  
  return BigInt(first) * BigInt(second) + ''; //первый вариант решения путем встраивания аргументов функции в объект BigInt  
}

 /* let firstNew = first.split('').reverse();   //второе решение
  let secondNew = second.split('').reverse();
  let multArr = [];
  for (let i = 0; i < firstNew.length; i++) {
    for (let j = 0; j < secondNew.length; j++) {
      let total = firstNew[i] * secondNew[j]; 
      multArr[i + j] = (multArr[i + j]) ? multArr[i + j] + total : total; }
  }
  for (let i = 0; i < multArr.length; i++) {
    let num = multArr[i] % 10;
    let round = Math.floor(multArr[i] / 10);
    multArr[i] = num;
    if (multArr[i+1])  multArr[i + 1] += round;
    else if (round !== 0) multArr[i + 1] = round;
  } 
    return multArr.reverse().join('');
}*/