// Logical AND // &&//\
//returns true if both operands are true//
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
// EXAMPLE//
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
console.log('Eligible',eligibleForLoan);

// LOGICAL OR (||)//
// Rwturns TRUE if one of the operands is TRUE//
let time = false;
let home = true;
let comeHome = time || home;
console.log(comeHome);

// LOGICAL NOT OPERATOR//
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);