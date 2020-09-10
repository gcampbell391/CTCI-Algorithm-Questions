
function jumpingOnClouds(c) {
    let jumpCount = 0
    let currentIndex = 0
    while (currentIndex < c.length) {
        if (currentIndex + 1 === c.length) {
            return jumpCount
        }
        else if (c[currentIndex + 1] === 1) {
            jumpCount = jumpCount + 1
            currentIndex = currentIndex + 2
        }
        else if (c[currentIndex + 1] === 0 && c[currentIndex + 2] === 0) {
            jumpCount = jumpCount + 1
            currentIndex = currentIndex + 2
        }
        else if (c[currentIndex + 1] === 0 && c[currentIndex + 2] === 1) {
            jumpCount = jumpCount + 1
            currentIndex = currentIndex + 1
        }
        else if (c[currentIndex + 1] === 0 && currentIndex + 2 === c.length) {
            jumpCount = jumpCount + 1
            return jumpCount
        }
    }
    return jumpCount
}