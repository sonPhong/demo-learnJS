
let arr = ['apple', 'cherry', 'banana', 'mango'];


function randomArr(x) {
    let lengArr = x.length;

    // vì floor làm lùi số lẻ nên ko cần -1, lách luật
    let numRD = Math.floor(Math.random() * (lengArr));

    console.log(numRD);
    console.log(arr[numRD]);
    console.log(lengArr);
}

randomArr(arr);