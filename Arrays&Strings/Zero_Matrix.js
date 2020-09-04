//Arrays and Strings 
//1.8 Zero Matrix
//pg 91


//Write an algorithm such that if an element in an M X N 
//matrix is 0, it's entire row and column are set to 0

const checkForZeros = (matrix) => {
    //Create new Matrix and set to param matrix
    // to enable data altercation
    let newMatrix = matrix;

    //Loop through each row in Matrix
    for (let x = 0; x < matrix.length; x++) {
        //Access each item in the row
        for (let y = 0; y < matrix[x].length; y++) {
            //If item in row equals 0, then set row to 0 and 
            //column to 0
            if (matrix[x][y] === 0) {
                //Set row to 0
                for (let i = 0; i < matrix[x].length; i++) {
                    newMatrix[x][i] = 0;
                }
                //Set column to 0
                for (let j = 0; j < matrix[x].length; j++) {
                    newMatrix[j][y] = 0;
                }
            }
        }
    }
    //Return updated Matrix
    return newMatrix;
};

//3x3 Matrix
const matrix1 = [
    [1, 2, 3],
    [5, 6, 7],
    [0, 8, 9]
];
console.log(checkForZeros(matrix1));
//3x3 Matrix
const matrix2 = [
    [1, 2, 3],
    [3, 2, 1],
    [1, 2, 3]
];
console.log(checkForZeros(matrix2));
//3x3 Matrix
const matrix3 = [
    [1, 2, 3],
    [3, 0, 1],
    [0, 2, 3]
];
console.log(checkForZeros(matrix3));
//3x3 Matrix
const matrix4 = [
    [1, 2, 3],
    [3, 2, 1],
    [2, 2, 0]
];
console.log(checkForZeros(matrix4));
