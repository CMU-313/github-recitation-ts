// Endpoint for querying the fibonacci numbers
// import fibonacci from './fib';
const fibonacci = require("./fib");

export default (req: { params: string; }, res: { send: (arg0: string) => void; }) => {
  const num:string = req.params;

  const fibN = fibonacci(parseInt(num));
  let result:string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
