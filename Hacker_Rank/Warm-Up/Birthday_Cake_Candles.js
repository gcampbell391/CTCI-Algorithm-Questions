/*
You are in charge of the cake for a child's birthday. 
You have decided the cake will have one candle for each 
year of their total age. They will only be able to blow 
out the tallest of the candles. Count how many candles 
are tallest.
*/


function birthdayCakeCandles(candles) {
    // Declare Variables
    let tallestCandle = 0
    let tallCandleCount = 0
    for (let x = 0; x < candles.length; x++) {
        //If candles matches tallest candle height, add to tall candle count
        if (candles[x] === tallestCandle) {
            tallCandleCount = tallCandleCount + 1
        }
        //If candle is taller than tallest candle, it becomes the tallest candle
        //and tallest candle count is set to 1
        else if (candles[x] > tallestCandle) {
            tallestCandle = candles[x]
            tallCandleCount = 1
        }
    }
    //Return tall candle count
    return tallCandleCount
}