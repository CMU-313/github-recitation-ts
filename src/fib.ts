// util function that computes the fibonacci numbers
module.exports = function fibonacci(n) {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  
  var result1:number= fibonacci(n-1);
  var result2:number= fibonacci(n-2);


  return result1 + result2;
};
