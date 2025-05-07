//---------------------Request 1 chọn 3 người thành 1 đội, có chủ lực + nòng cốt + dự bị---------------------

const NC = ["N1"];
const CL = ["CL1","CL2","CL3","CL4","CL5"];
const DB = ["DB1","DB2","DB3","DB4","DB5"];

const team1 = [];

for(let i = 0; i < CL.length; i++){
    for(let j = 0; j< DB.length; j++){
        team1.push([NC[0],CL[i],DB[j]]);
    }
}
console.log(team1);
console.log(team1.length);

//---------------------Request 2 chọn 3 người thành 1 đội, ràng buộc điều kiện---------------------
// điều kiện: - cặp bài trùng HLV muốn ghép chung <=> có cặp không thể ghép chung  ==> thêm ràng buộc điều kiện đầu có thể thay đổi

