
//~ 1. Maria is calculating the cost of monthly payments. For every transaction there is a $3 fee and a 1% (0.01) interest fee. 
//* Given an input transaction amount, export a function that returns the value of what she should be paying.
//* This function should be able to take a number as input, and return a number as output.

export function costCalculator(transactionamount) {
    const fee = 3;
    const interestfee = 0.01;

const interest = transactionamount * interestfee;
const totalCost = transactionamount + fee + interest;

return totalCost;

}

const cost = costCalculator(Number(process.argv[3]))
console.log(cost)