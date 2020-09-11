
/*
    Given a meal total, the tip percentage, and the tax percentage, return 
    the total amount rounded to the dollar amount(no change, there is 
    a shortage!). 
*/

function solve(meal_cost, tip_percent, tax_percent) {
    //Set Variables 
    let taxAmount = 0
    let tipAmount = 0
    let finalPayement = 0

    //Set Tip Amount
    tipAmount = (meal_cost * (tip_percent / 100)).toFixed(2)
    //Set Tax Amount
    taxAmount = (meal_cost * (tax_percent / 100)).toFixed(2)
    //Set Final Amount and return it
    finalPayement = parseFloat(meal_cost) + parseFloat(tipAmount) + parseFloat(taxAmount)
    console.log(finalPayement.toFixed(0))
}
