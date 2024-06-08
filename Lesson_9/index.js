//Cau 1
function sapXep(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length ; j++){
            if(arr[i] > arr[j]){
             let temp = arr[i];
             arr[i] = arr[j];
             arr[j] = temp   
            }
        }
    }
    return arr;
}
const arr = [12, 33, 45, 7, 89];
console.log(sapXep(arr))
//Cau 2
function findKthLargest(nums, k){
    const uniqueNums = [...new Set(nums)]
    for(let i = 0; i < uniqueNums.length; i++){
        for(let j = i + 1; j > uniqueNums.length; j++){
            if(uniqueNums[i] > uniqueNums[j]){
                let temp = uniqueNums[i];
                uniqueNums[i] = uniqueNums[j];
                uniqueNums[j] = temp
            }
        }
    }
    if(k > uniqueNums.length){
        return 'Khong co so lon thu k trong mang nay'
    }
    return uniqueNums[k-1]
}
const nums = [2,5,2,7,9,10]
const k = 3;
console.log(findKthLargest(nums,k))
// Cau 3
function mostOccurrence(array){
    let countObj ={};
    for(let i = 0; i < array.length; i++){
        let num = array[i];
        countObj[num] = (countObj[num] || 0) +1;
        // console.log(countObj);
    }
    let maxCount = 0;
    for(let key in countObj){
        if(countObj[key] > maxCount){
            maxCount = countObj[key]
        }
    }
    let mostNums =[];
    for(let key in countObj){
        if(countObj[key] === maxCount){
            mostNums.push(Number(key));
        }
    }
    return Math.max(...mostNums);
}
const array = [1, 2, 3, 2, 2, 1, 4, 5, 10];
console.log(mostOccurrence(array));
// Cau 4
function splitWords(str){
    return str.split(" ");
}
let splitWord = "This is a test";
console.log(splitWords(splitWord));
// Cau 5
function sumOfNumbers(data){
    let sum = 0;
    for(let key in data){
        if(typeof data[key] === 'number'){
            sum += data[key];
        }
    }
    return sum;
}
let data = { a: 1, b: 'hello', c: 3, d: 'world' };
console.log(sumOfNumbers(data))


