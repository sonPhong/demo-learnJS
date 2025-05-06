
let n = 5;
let k = 2;
let nk = n - k; // test n-k

let gTN = 1;
let gTK = 1;
let gTNK = 1;


function tinhGT(n, k, nk) {
    for (let i = 1; i <= n; i++) {
        gTN *= i;
    }

    for (let a = 1; a <= k; a++) {
        gTK *= a;
    }

    for (let b = 1; b <= nk; b++) {
        gTNK *= b;
    }

    let result = gTN / (gTK * gTNK);
    console.log(result);
    console.log(gTN);
    console.log(gTK);
    console.log(gTNK);
}

    



tinhGT(n, k, nk);