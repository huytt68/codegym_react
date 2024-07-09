const array = [1, 2, 3, 4, 5];

// 1. Viết một hàm arrow có tên là sumArray, nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
const sumArray = (arr) => {
    let sum = 0;
    arr.forEach(item => {
        sum +=item;
    })
    return sum;
}
console.log(sumArray(array))

// cach 2
const sumArray2 = (arr) => {
    return arr.reduce((accumulator, item) => accumulator+item, 0);
}
console.log(sumArray2(array))


// 2. Viết một hàm arrow có tên là squareArray, nhận vào một mảng số nguyên và trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.
const squareArray= (arr) => {
    let arr2 = [];
    arr.forEach(item => {
        arr2.push(item*item);
    })
    return arr2;
}
console.log(squareArray(array))

// cach 2
const squareArray2 = (arr) => {
    return arr.map(item => item*item);
}

console.log(squareArray2(array))
// 3. Viết một hàm arrow có tên là filterGreaterThan, nhận vào một mảng số nguyên và một giá trị nguyên, trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.
const value = 2;
const filterGreaterThan = (arr, value) => {
    let arr3 = [];
    arr.forEach(item => {
        if(item>value) arr3.push(item);
    })
    return arr3;
}
console.log(filterGreaterThan(array, value));

// cach 2: dung filter
const filterGreaterThan2 = (arr, value) => {
    return arr.filter(item => item > value);
}
console.log(filterGreaterThan2(array, value))


// 4. Viết một hàm arrow có tên là maxInArray, nhận vào một mảng và trả về một giá tại lớn nhất trong mảng ban đầu.
const maxInArray = (arr) => {
    let max = arr[0];
    arr.forEach(item => {
        if (item > max) max = item;
    })
    return max;
}
console.log(maxInArray(array));

// cach 2
const maxInArray2 = (arr) => {
    return Math.max(...arr);
}
console.log(maxInArray2(array))


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

// -------------------------------------------------------------------------------------------
// MAP
// 1. Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa bình phương của các số.
const arr1 = [15, 9, 17, 20, 6];
const newArr1= arr1.map(value => value*value);
console.log(newArr1);

// 2. Sử dụng map để chuyển đổi một mảng các chuỗi thành một mảng mới chứa độ dài của mỗi chuỗi.
const arr2 = ['afags', 'agasgag', '15gasg', '123', '1gosiafjfj'];
const newArr2 = arr2.map(value => value.length);
console.log(newArr2);

// 3. Sử dụng map để chuyển đổi một mảng các đối tượng thành một mảng mới chứa giá trị của một thuộc tính cụ thể.
const arr3 = [
    {name:'huy', age:23},
    {name:'linh', age:15},
    {name:'trang', age: 31},
    {name:'thao', age: 25}];
const newArr3 = arr3.map(value => value.name);
console.log(newArr3)

// 4. Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa chuỗi "even" hoặc "odd" tương ứng với mỗi số.
const arr4 = [15, 9, 17, 20, 6];
const newArr4 = arr4.map(value => value%2===0 ? 'even' : 'odd');
console.log(newArr4);

// 5. Sử dụng map để chuyển đổi một mảng các từ thành một mảng mới chứa các từ viết hoa.
const arr5 = ['code', 'javascript', 'browser', 'react', 'htmlcssjs'];
const newArr5 = arr5.map(value => value.toUpperCase());
console.log(newArr5)