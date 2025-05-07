

//-- menu --

// tạo và sử dụng readline cmd
const readline = require("readline"); // Import thư viện readline

// Tạo giao diện để nhận input từ người dùng
const rl = readline.createInterface({
    input: process.stdin, //read
    output: process.stdout // write
});

// Đặt câu hỏi cho người dùng
// rl.question("Nhập tên của bạn: ", function (x) {
//     console.log("Xin chào, " + x + "!");
//     rl.close(); // Đóng giao diện sau khi hoàn thành
// });

function showMenu() {
    console.log(`
        ==== MENU ====
        1. Thêm sinh viên
        2. Hiện danh sách sinh viên
        3. Tìm theo tên
        4. Hiện thông tin thống kê
        5. Tải thông tin xuống
        6. Thoát
        `);
}

function requestUser() {
    showMenu();
    rl.question("Nhập lựa chọn của bạn: ", function (answer) {
        console.log("Lựa chọn của bạn là: , " + answer + "!");
        checkRequest(answer); // đưa tham số request vào

        // rl.close(); // Đóng giao diện sau khi hoàn thành
    });
}

function checkRequest(answer){
    switch (answer){
        case "1": // luôn chuỗi
        console.log("Chọn 1");
            //addSV();
            break;
        case "2":
            //showListSV();
            console.log("Chọn 2");
            break;
        case "3":
            //searchSV();
            console.log("Chọn 3");
            break;
        case "4":
            //showInfo();
            console.log("Chọn 4");
            break;
        case "5":
            //dowanInfo();
            console.log("Chọn 5");
            break;
        case "6":
            //exitPro();
            console.log("Chọn 6");
            break;
        default: 
            console.log("Chọn sai, chọn lại nhé");
            break;
    }
    requestUser();
    
}

requestUser();

let listSV =[];

class Students{
   constructor(ID,Name,Age,Class){
    this.ID = ID;
    this.Name = Name;
    this.Age = Age;
    this.Class = Class;

   } 
}

function addSV(){
    

    const sv1 = new Students(I,N,A,C);   
    listSV.push(sv1);
}
