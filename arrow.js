const array = [15, 9, 17, 20, 6];
console.log(array)

// 1. Viết một hàm arrow có tên là sumArray, nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
const sumArray = (arr) => {
    let sum = 0;
    arr.forEach(item => {
        sum +=item;
    })
    return sum;
}
console.log(sumArray(array))

// 2. Viết một hàm arrow có tên là squareArray, nhận vào một mảng số nguyên và trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.
const squareArray= (arr) => {
    let arr2 = [];
    arr.forEach(item => {
        arr2.push(item*item);
    })
    return arr2;
}
console.log(squareArray(array))

// 3. Viết một hàm arrow có tên là filterGreaterThan, nhận vào một mảng số nguyên và một giá trị nguyên, trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.
const value = 14;
const filterGreaterThan = (arr, value) => {
    let arr3 = [];
    arr.forEach(item => {
        if(item>value) arr3.push(item);
    })
    return arr3;
}
console.log(filterGreaterThan(array, value));

// 4. Viết một hàm arrow có tên là maxInArray, nhận vào một mảng và trả về một giá tại lớn nhất trong mảng ban đầu.
const maxInArray = (arr) => {
    let max = -10e6;
    arr.forEach(item => {
        if (item > max) max = item;
    })
    return max;
}
console.log(maxInArray(array));

// 5. Viết một hàm arrow có tên là avgArray, nhận vào một mảng và trả về trung bình các giá trị trong mảng ban đầu.
const avgArray = (arr) => {
    let sum = 0;
    let arrLen = arr.length;
    arr.forEach(item => {
        sum+=item;
    })
    return sum/arrLen;
}
console.log(avgArray(array))