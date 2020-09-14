/*
Anna and Brian are sharing a meal at a restuarant and they agree to split the bill 
equally. Brian wants to order something that Anna is allergic to though, and they 
agree that Anna won't pay for that item. Brian gets the check and calculates Anna's 
portion. You must determine if his calculation is correct.

Complete the bonAppetit function in the editor below. It should print Bon Appetit 
if the bill is fairly split. Otherwise, it should print the integer amount of money 
that Brian owes Anna.

bonAppetit has the following parameter(s):

    bill: an array of integers representing the cost of each item ordered
    k: an integer representing the zero-based index of the item Anna doesn't eat
    b: the amount of money that Anna contributed to the bill


*/


// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    let finalSum = 0
    let results = ''
    bill.splice(k, 1)
    for (let x = 0; x < bill.length; x++) {
        finalSum = finalSum + bill[x]
    }
    if ((finalSum / 2) === b) {
        results = 'Bon Appetit'
    }
    else {
        results = b - (finalSum / 2)
    }
    console.log(results)
}