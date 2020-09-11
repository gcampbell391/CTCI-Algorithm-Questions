/*
    Print the sum of both integers on the first line, 
    the sum of both doubles (scaled to 1 decimal place) 
    on the second line, and then the two concatenated 
    strings on the third line.
*/


function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var i2 = 0
    var d2 = 0.0
    var s2 = ""
    // Read and save an integer, double, and String to your variables.
    i2 = parseInt(input_stdin_array[0])
    d2 = parseFloat(input_stdin_array[1])
    s2 = input_stdin_array[2]
    // Print the sum of both integer variables on a new line.
    console.log(i + i2)
    // Print the sum of the double variables on a new line.
    console.log((d + d2).toFixed(1))
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + s2)
}