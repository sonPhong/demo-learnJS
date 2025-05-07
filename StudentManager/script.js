// tạo và sử dụng readline cmd
const readline = require("readline"); // Import thư viện readline

// Tạo giao diện để nhận input từ người dùng
const rl = readline.createInterface({
    input: process.stdin, //read
    output: process.stdout // write
});

// Hàm tạo menu
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

// Hàm lấy yêu cầu người dùng - show menu - khởi tạo đầu tiên
function requestUser() {
    showMenu();
    rl.question("Nhập lựa chọn của bạn: ", function (answer) {
        console.log("Lựa chọn của bạn là: , " + answer + "!");
        checkRequest(answer); // đưa tham số request vào

        // rl.close(); // Đóng giao diện sau khi hoàn thành
    });
}

// Hàm check yêu cầu
function checkRequest(answer) {
    switch (answer) {
        case "1": // luôn chuỗi
            console.log("Chọn 1");
            addSV();
            break;
        case "2":
            showListSV();
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

let listSV = [];

// Hàm tạo đối tượng sinh viên
class Students {
    constructor(ID, Name, Age, Class, Score) {
        this.ID = ID;
        this.Name = Name;
        this.Age = Age;
        this.Class = Class;
        this.Score = Score;
    }
}

// Hàm tạo sinh viên mới
function addSV() {
    console.log(`
        ==== Thêm Sinh Viên ====
        Hãy nhập ID, Tên, Tuổi, Lớp
        `);
    rl.question("Nhập id, name, age, class, score của bạn (Ex: 123-phong-25...): ", function (answer) {
        const [id, name, age, className, score] = answer.split("-");
        listSV.push(new Students(id, name, age, className, score));
        console.log("Đã thêm sinh viên");
        requestUser();
    });
}

// Hàm hiện list sinh viên
function showListSV(){
    console.log("Danh sách sinh viên");
    listSV.forEach(function(x){
        console.log(x);
    });
}

// Hàm tìm sinh viên (theo tên)
function searchSV() {
    rl.question("Nhập tên cần tìm: ", function (answer) {
        let name = answer;
    });
    const results = students.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
    if (results.length === 0) {
        console.log("Không tìm thấy sinh viên!");
    } else {
        console.log("\nKết quả tìm kiếm:");
        results.forEach(s => console.log(`${s.id} - ${s.name}, Lớp: ${s.className}, Điểm: ${s.score}`));
    }
}