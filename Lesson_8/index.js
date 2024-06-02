// Câu 1
const numbers = [1,2,3,4,2,1,3,2,4,2];
const targetCounting = 4;
let count = 0;
for(let i = 0; i < numbers.length; i++ ){
    if ( numbers[i] == targetCounting)
        count++
}
console.log("Phan tu " + targetCounting + " xuat hien " + count + " lan")
// Cau 2
const numberss = [5,2,9,3,7,11,8]
let max = numberss[0];
for(let j = 0; j< numberss.length; j++){
    if(max < numberss[j]){
        max = numberss[j];
    }
}
console.log("Max = ", max)
// Cau 3
const array =[1,2,3,4,5];
array.reverse();
console.log(array);
// Cau 4
const duplicatesArray = [1,2,2,3,4,4,5]
let newArr =[];
for ( let t = 0 ; t < duplicatesArray.length; t++){
    if(newArr.indexOf(duplicatesArray[t]) === -1){
        newArr.push(duplicatesArray[t]);
    }
}
console.log(newArr);
// Cau 5
const students = [
    {name: "Alice", age: 20, grades:[80,85,90]},
    {name: "Bob", age: 21, grades:[75,88,95]}
]
const diemTrungbinh =[];
for( let n = 0; n < students.length; n++){
  const student = students[n];
    let sum = 0;
    for(let m = 0; m < student.grades.length ; m++){
        sum += student.grades[m];
    }
    const avgGrade = sum / student.grades.length;
    diemTrungbinh.push({name:student.name, avgGrade: avgGrade})
}
console.log(diemTrungbinh);
// Cau 6
const products = [
    { name: "Áo", price: 20 },
    { name: "Quần", price: 30 },
    { name: "Giày", price: 50 }
];
let sanPhamReNhat = products[0];
for(let z = 1; z < products.length; z++){
    if(products[z].price < sanPhamReNhat.price){
        sanPhamReNhat =products[z];
    }
}
console.log(sanPhamReNhat)
// Cau 7
const students_01 = [
    { name: "Alice", age: 20, grades: { math: 90, english: 85, science: 88 } },
    { name: "Bob", age: 21, grades: { math: 80, english: 75, science: 78 } }
];
const diemMonHoc = {};
for (let x = 0; x < students_01.length; x++){
    const student_01 = students_01[x];
    const grades_01 = student_01.grades;
    for(let subject in grades_01){
        if(diemMonHoc.hasOwnProperty(subject)){
            diemMonHoc[subject].push(grades_01[subject]);
        }else{
            diemMonHoc[subject] =[grades_01[subject]];
        }
    }
}
console.log(diemMonHoc)






