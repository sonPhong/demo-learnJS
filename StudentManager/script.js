// ---------------------------------------Tạo hàm xử lý json - readline---------------------------------------
// -----------Tạo và sử dụng readline cmd-----------
const readline = require("readline"); // Import thư viện readline

// Tạo giao diện để nhận input từ người dùng
const rl = readline.createInterface({
    input: process.stdin, //read
    output: process.stdout // write
});

// -----------Hàm xử lý json-----------
const fs = require("fs");
const FILE_PATH = "listSV.json";

// Hàm tải dữ liệu từ tệp JSON khi khởi động
function loadData() {
    if (fs.existsSync(FILE_PATH)) {
        const data = fs.readFileSync(FILE_PATH, "utf8");

        // thêm điều kiện check file tồn tại - rỗng
        if (data.trim() === "") {
            listSV = [];
        } else {
            listSV = JSON.parse(data);
        }
    }
}

// Hàm lưu danh sách sinh viên vào tệp JSON
function saveData() {
    fs.writeFileSync(FILE_PATH, JSON.stringify(listSV, null, 4), "utf8");
}

// ---------------------------------------Tạo hàm xử lý yêu cầu---------------------------------------
// Hàm tạo menu
function showMenu() {
    console.log(`
        ==== MENU ====
        1. Thêm sinh viên
        2. Hiện danh sách sinh viên
        3. Tìm theo tên
        4. Hiện thông tin thống kê
        5. Thoát
        `);
}

// Hàm lấy yêu cầu người dùng -> show menu -> khởi tạo đầu tiên
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
            addSV();
            break;
        case "2":
            showListSV();
            break;
        case "3":
            searchSV();

            return;
        case "4":
            showInfoList();
            break;
        case "5":
            console.log("Thoát chương trình");
            rl.close(); // Đóng giao diện sau khi hoàn thành
            return;
        default:
            console.log("Chọn sai, chọn lại nhé");
    }
    requestUser();

}

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
        saveData();
        console.log("Đã thêm sinh viên");
        requestUser();
    });
}

// Hàm hiện list sinh viên
function showListSV() {
    console.log("Danh sách sinh viên");
    listSV.forEach(function (x) {
        console.log(x);
    });
}

// Hàm tìm sinh viên (theo tên)
function searchSV() {
    rl.question("Nhập tên cần tìm: ", function (answer) {
        const name = answer;
        const results = listSV.filter(s => s.Name.toLowerCase().includes(name.toLowerCase()));

        if (results.length > 0) {
            console.log("Kết quả tìm kiếm:");
            console.log(results);
            requestUser();
        } else {
            console.log("Không tìm thấy sinh viên có tên tương tự!");
            requestUser();
        }
    });

    
}

// Hàm hiện thống kê sinh viên
function showInfoList() {
    console.log(`Tổng số sinh viên: ${listSV.length}`);

    // Dùng hàm reduce(function(sum,s)=> sum +s.Score , 0)) 0 cuối là giá trị start cho hàm
    const avgScore = listSV.reduce((sum, s) => sum + s.Score, 0) / listSV.length || 0;
    console.log(`Điểm trung bình: ${avgScore.toFixed(2)}`);

    // Lọc filter sinh viên đủ điều kiện vào mảng mới
    const categories = {
        "Xuất sắc": listSV.filter(s => s.Score >= 8).length,
        "Tốt": listSV.filter(s => s.Score >= 6.5 && s.Score < 8).length,
        "Trung bình": listSV.filter(s => s.Score < 6.5).length,
    };
    console.log(`Phân loại: Xuất sắc: ${categories["Xuất sắc"]}, Tốt: ${categories["Tốt"]}, Trung bình: ${categories["Trung bình"]}`);
}

loadData();

requestUser();

