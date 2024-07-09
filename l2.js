// 1. Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor.
const colors1 = ['red','green','blue'];
const [firstColor, secondColor, thirdColor] = colors1;
console.log(firstColor, secondColor, thirdColor);

// 2. Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng.
const person1 = {name: "Huy", age: 23};
const {name, age} = person1;
console.log(name,'is', age,'years old');

// 3. Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator.
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const newArr = [...arr1,...arr2];
console.log(newArr);

// 4. Tạo một bản sao của mảng originalArray bằng cách sử dụng spread operator.
const originalArray = [1,2,3,4,5,6,7,8];
const newArray = [...originalArray];
console.log(newArray);

// 5. Thêm một phần tử số 4 vào cuối mảng arr bằng cách sử dụng spread operator.
const arr = [1,2,3];
const newArr1 = [...arr, 4];
console.log(newArr1)

// 6. Cho hai đối tượng obj1 và obj2, viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng.
const obj1 = {name: 'Huy', age: 23};
const obj2 = {gender:'male', dob:'6/8/2001'};
const newObj = {...obj1,...obj2};
console.log(newObj);

// 7. Cho một đối tượng person với các thuộc tính như name, age, và gender, viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là "Vietnam".
let person2 = {name: 'Huy', age: 23, gender: 'male'};
let newPerson2 = {...person2, country: "Vietnam"};
console.log(newPerson2);

// 8. Sử dụng filter để lọc ra các số chẵn từ một mảng số nguyên.
const initialArr1 = [1,2,3,4,5,6,7,8];
const resultArr1 = initialArr1.filter(item => item%2===0);
console.log(resultArr1);

// 9. Sử dụng filter để lọc ra các chuỗi có độ dài lớn hơn một ngưỡng cho trước từ một mảng các chuỗi.
const initialArr2 = ['mode','hi','bar','world', 'javascript','htmlcss'];
const initialValue2 = 4;
const resultArr2 = initialArr2.filter(item => item.length>initialValue2);
console.log(resultArr2)

// 10. Sử dụng filter để lọc ra các đối tượng từ một mảng các đối tượng dựa trên một điều kiện cho trước.
const initialArr3 = [
    {name:'huy', age:23},
    {name:'linh', age:15},
    {name:'trang', age: 31},
    {name:'thao', age: 25},
    {name:'duc', age: 35}];
const resultArr3 = initialArr3.filter(item => item.age>30);
console.log(resultArr3);

// 11. Sử dụng filter để lọc ra các số nguyên tố từ một mảng số nguyên.
const isPrime = (n) => {
    if (n < 2) return false;
    for (let i=2; i<=Math.sqrt(n); i++) {
        if (n%i===0) return false;
    }
    return true;
}
const initialArr4 =[1, 3, 5, 8, 11, 13, 15, 21, 24, 29];
const resultArr4 = initialArr4.filter(item => isPrime(item));
console.log(resultArr4);

// 12. Sử dụng filter để lọc ra các chuỗi không chứa ký tự số từ một mảng các chuỗi.
const containNumber = (str) => {
    return str.match(/\d+/) != null;
}
const initialArr5 = ['alo123', 'java','react','html5','css3'];
const resultArr5 = initialArr5.filter(item => !containNumber(item));
console.log(resultArr5);

// 13. Sử dụng reduce để tính tổng của các số trong một mảng số nguyên.
const initialArr6 = [1,2,3,4,5,6];
const resultArr6 = initialArr6.reduce((sum, currentItem) => sum+ currentItem,0);
console.log(resultArr6);

// 14. Sử dụng reduce để tính tích của các số trong một mảng số nguyên.
const initialArr7 = [1,3,5];
const resultArr7 = initialArr7.reduce((accumulation, currentItem) => accumulation*currentItem,1);
console.log(resultArr7);

// 15. Sử dụng reduce để tìm giá trị lớn nhất trong một mảng số nguyên.
const initialArr8 = [2,5,34,51,16,41,9];
let initialMax= initialArr8[0];
const resultArr8 = initialArr8.reduce((max, currentItem)=> {
    return currentItem>max?currentItem:max;
})
console.log(resultArr8);

// 16. Sử dụng reduce để đếm số lần xuất hiện của mỗi phần tử trong một mảng.
const initialArr9 = [4,5,6,2,4,4,1,6,'zalo','facebook','zalo',10];
const countOccurrences = (arr) => {
    return arr.reduce((dem,currentItem) => {
        dem[currentItem] = dem[currentItem] + 1 || 1;
        return dem;
    }, {});
}
console.log(countOccurrences(initialArr9));

// 17.  Sử dụng reduce để tính tổng của các giá trị số trong một mảng các đối tượng, với mỗi đối tượng có một thuộc tính số cần tính tổng.
const initialArr10 = [
    {subject:'Math', score: 8.5 },
    {name:'Literature', score: 7},
    {name:'Physics', score: 8},
    {name:'English', score: 9},
    {name:'Chemistry', score: 6}];
const resultArr10 = initialArr10.reduce((totalScore, currentItem) => {
    return totalScore+ currentItem.score;
},0);
console.log("Tong diem: ",resultArr10);