//when we want to supply default values to a parameter of function//
function interest(principal, rate, years) {
    return principal * rate / 100 * years;

}
console.log(interest(1000, 3.5, 5));
// defining a defalut value for parameter//
function simpleInterest(principal, rate, years) {
    rate = rate || 3.5;
    years = years|| 5;
    return principal * rate / 100 * years
}
console.log(simpleInterest(10000));