//---------------------Request 1 chọn 3 người thành 1 đội, 1có chủ lực + 1-2 nòng cốt + nếu chọn 1 thì còn lại dự bị---------------------

const NC = ["N1"];
const CL = ["CL1", "CL2", "CL3", "CL4", "CL5"];
const DB = ["DB1", "DB2", "DB3", "DB4", "DB5"];

const team1 = [];
const team2 = [];

// test chọn team1 mõi người 1 đội
for (let i = 0; i < CL.length; i++) {
    for (let j = 0; j < DB.length; j++) {
        team1.push([NC[0], CL[i], DB[j]]);
    }
}

// test chọn team2 chủ lực chọn 2 người
let temp = [];
for (let i = 0; i < CL.length; i++) {
    for (let j = i+1; j < CL.length; j++) {
        temp.push([CL[i],CL[j]]);
    }
}

for(let i=0; i<temp.length;i++){
    team2.push([NC[0],temp[i]]);
}

console.log(temp);

console.log(team1);
console.log(`cách chọn team 1: ${team1.length}`);

console.log(team2);
console.log(`Cách chọn team 2: ${team2.length} ==> Tổng: ${team1.length+team2.length} cách`);

//---------------------Request 2 chọn 3 người thành 1 đội, ràng buộc điều kiện---------------------
// điều kiện: - cặp bài trùng HLV muốn ghép chung <=> có cặp không thể ghép chung  ==> thêm ràng buộc điều kiện đầu có thể thay đổi

// Tạo cặp bài trùng và cặp đối đầu

