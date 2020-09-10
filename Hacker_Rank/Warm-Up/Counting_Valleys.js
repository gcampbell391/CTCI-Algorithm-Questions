function countingValleys(n, s) {
    let currentElevation = 0
    let valleysCrossed = 0
    let enteredValley = false

    for (let x = 0; x < n; x++) {
        if (s[x] === 'U') {
            currentElevation = currentElevation + 1
            if (enteredValley === true && currentElevation > -1) {
                valleysCrossed = valleysCrossed + 1
                enteredValley = false
            }
        }
        if (s[x] === 'D') {
            currentElevation = currentElevation - 1
            if (currentElevation < 0) {
                enteredValley = true
            }
        }
    }
    return valleysCrossed

}