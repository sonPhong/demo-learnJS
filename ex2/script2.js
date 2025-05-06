
let min = 10;
let max = 100;

function getRandom(min, max) {
    // --use random functon, hậu tố +min vai trò giữ số sau khi floor không bị thấp hơn min
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}
getRandom(min, max);
