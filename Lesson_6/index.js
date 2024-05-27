// Cau 1
let length = 5;
let width = 4;
let area = length * width;
let perimeter = (length + width)*2;
console.log('Dien tich hinh chu nhat:',area);
console.log('Chu vi hinh chu nhat:' ,perimeter);
// Cau 2
let s = 12345;
let gio = (s - s%3600)/3600;
let phut = ((s%3600)-(s%3600) % 60)/60;
let giay = s - phut*60-gio*3600;
console.log(gio+"h", +phut+"m", giay+"s");
// Cau 3
let luyThua = 2;
let coSo = 5**luyThua;
console.log("Tich luy thua:",coSo);
// Cau 4
let soThuNhat = 1;
let soThuHai = 2;
let soThuBa = 3;
let tB = (soThuNhat + soThuHai + soThuBa)/3;
console.log("Trung binh cua 3 so:", tB);
// Cau 5
let x1 = 2;
let x2 = 4;
let y1 = 2;
let y2 = 4;
let toaDo =  Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
console.log("Toa do:",toaDo);
// Cau 6
let so1 = 5;
let so2 = 3;
let so3 = 1;
console.log("So thu nhat la so lon nhat:", so1 > so2 && so1 > so3);
// Cau 7
let chuoi1 = 1;
let chuoi2 = "1";
console.log("Chuoi nguoi nhap cung bang gia tri va du lieu:",chuoi1 === chuoi2);
// Cau 8
let soNhap = 4;
let soDuong = soNhap > 0;
console.log("So nhap phai la so duong:" , soDuong);
// Cau 9
let soNam = 2012;
let namNhuan = ((soNam %4 == 0 || soNam %400 == 0 ) && soNam %100 != 0);4
console.log("Day la nam nhuan:",namNhuan);
// Cau 10
let h1 = 17;
let h2 = 17;
let m1 = 30;
let m2 = 29;
let soSanh = ((h1*3600) + (m1*60)) > ((h2*3600) + (m2*60));
console.log ("Thoi gian thu nhat som hon thoi gian thu hai:", soSanh)


