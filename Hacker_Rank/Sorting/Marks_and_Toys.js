/*

Complete the function maximumToys in the editor below. It should 
return an integer representing the maximum number of toys Mark can 
purchase.

maximumToys has the following parameter(s):

- prices: an array of integers representing toy prices
- k: an integer, Mark's budget

*/


function maximumToys(prices, k) {
    let currentWallet = k
    let toyCart = []

    //Sort toy prices 
    prices.sort((a, b) => a - b)

    for (let x = 0; x < prices.length; x++) {
        if (currentWallet - prices[x] >= 0) {
            currentWallet = currentWallet - prices[x]
            toyCart.push(prices[x])
        }
    }
    return toyCart.length
}
