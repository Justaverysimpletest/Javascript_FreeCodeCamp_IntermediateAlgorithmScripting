//We'll pass you an array of two numbers. 
//Return the sum of those two numbers plus 
//the sum of all the numbers between them. 

function sumAll(arr) {
    let min=(Math.min(arr[0],arr[1]));
    let max=(Math.max(arr[0],arr[1]));
    let sum=min;
    for (let i=min+1; i <=max; i++){
      sum = sum+i
    }
    return sum
  }
  
  console.log(sumAll([1, 4]));