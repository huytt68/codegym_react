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