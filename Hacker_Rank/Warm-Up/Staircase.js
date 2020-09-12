/*
Print a staircase of size n using # symbols and spaces.

Ex:
n = 4
   #
  ##
 ###
####

Note: The last line must have 0 spaces in it.
*/

function staircase(n) {
    const staircase = '#'
    const extraSpaces = " "
    let staircaseMessage = ""
    for (let x = 0; x < n; x++) {
        staircaseMessage = ""
        if (x + 1 === n) {
            //.repeat(n) will repeat a string n times
            staircaseMessage = staircaseMessage + staircase.repeat(x + 1)
            console.log(staircaseMessage)
        }
        else {
            staircaseMessage = staircaseMessage + extraSpaces.repeat(n - (x + 1))
            staircaseMessage = staircaseMessage + staircase.repeat(x + 1)
            console.log(staircaseMessage)
        }
    }
}