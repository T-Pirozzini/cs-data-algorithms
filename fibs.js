const fibs = (n) => {
  let arr = [0,1];

  for (let n = 2; n < 8; n++) {
    arr[n] = arr[n-2] + arr[n-1];    
  }
  
  return arr
}

console.log(fibs(8))


const fibsRec = (n) => { 
  if (n < 2) {
    return n;
  } else {    
    return (fibsRec(n-1) + fibsRec(n-2));  
  }
}

console.log(fibsRec(8))