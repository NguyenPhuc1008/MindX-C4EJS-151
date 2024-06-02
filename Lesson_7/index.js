// Câu 1
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log("Tong cac chu so tu 0 den 100:", sum);
// Câu 2
for (let j = 0; j <= 100; j++) {
    if (j % 3 == 0 && j % 5 == 0) {
        console.log("So chia het cho 3 va 5:", j);
    }
}

// Câu 3
let giaiThua = 5;
let tichGiaiThua = 1;
if (Number.isSafeInteger(giaiThua)) {
    for (let l = 1; l <= giaiThua; l++) {
        tichGiaiThua *= l;
    }
    console.log("Tich giai thua so nguyen:", tichGiaiThua);
} else {
    console.log("Giai thua khong phai so nguyen");
}
// Câu 4
console.log("Bảng cửu chương từ 2 đến 9:")
for (let m = 2; m <= 9; m++) {
    for (let n = 1; n <= 9; n++) {
        console.log(+n + "*" + m + "=" + (n * m));
    }
}
// Câu 5
let num = 35;
let nhiPhan = 0;
let pow = 0;
while(Math.floor(num)>0){
    nhiPhan += (Math.floor(num)%2)*(10**pow);
    pow++;
    num = num /2;
};
console.log(nhiPhan)
// Câu 6
let number = 2;
let s = 0;
for(let l = number ; l >= 1; l--){
    s = Math.sqrt(l+s);
};
console.log(s);
//Câu 7
let number_1 = 2;
let s_1 = 0;
for(let l_1 = 1 ; l_1 <= number_1; l_1++){
    s_1 = Math.sqrt(l_1+s_1);
};
console.log(s_1);




