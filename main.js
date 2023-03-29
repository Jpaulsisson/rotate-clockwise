// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

//[1,2,3]   [7,4,1]
//[4,5,6] ->[8,5,2]
//[7,8,9]   [9,6,3]


// Example 2:
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

//[5,1,9,11]      [15,13,2,5]
//[2,4,8,10]  ->  [14,3,4,1]
//[13,3,6,7]      [12,6,8,9]
//[15,14,12,16]   [16,7,10,11]

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
const answer = [[7,4,1], [8,5,2], [9,6,3]];

const matrixReloaded = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
const answerReloaded = [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]];

//////// first attempt ///////////////
// function rotateClockwise(arr) {
//   const arrMap = new Map();
//   for (let i = 0; i < arr.length; i++) {         ///I was cookin here. Then had a quick idea.
//     for (let j = 0; j < arr.length; j++) {
//       let element = [i, j];
//       arrMap.set(element, { newSpot: arr.indexOf(arr[j]), value: arr[i][j] })
//       console.log(arrMap.get(element));
      
//       // if (arr.indexOf(arr[j]) === 0) {
//       // }
//     }
//   }
// }

// rotateClockwise(matrix)

///// quick idea / attempt 2 ////////
function turnRight(arr) {
  let copy = arr.slice(0, arr.length);  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let inner = copy.indexOf(copy[j]);            ///solved. boom.
      arr[inner].push(copy[i][j]);
    }         
  } arr.forEach((value) => value.reverse());
    arr.forEach((value) => value.splice(value.length / 2, value.length / 2));
    return arr;
}


  console.log(turnRight(matrixReloaded))