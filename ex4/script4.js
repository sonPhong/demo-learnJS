let arr1 = ['cherry', 'mango', 'banana', 'apple'];
let arr2 = ['banana', 'cherry', 'apple', 'lemon'];

let arrCheck = [];

function checkMiss(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let checkz = false;
        for (let x = 0; x < arr2.length; x++) {
            if (arr1[i] === arr2[x]) {
                checkz = true;
                break;
            }
        }
        if (!checkz) {
            arrCheck.push(arr1[i]);
        }
    }

    console.log(arrCheck);
}

// test thử git

checkMiss(arr1, arr2);
