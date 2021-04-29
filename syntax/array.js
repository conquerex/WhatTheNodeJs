var arr = ['a','b','c','e','t']

console.log(arr[1]);

arr[2] = 4

console.log(arr);
console.log(arr.length);

arr.push('FFFF')
console.log(arr);

var number = [1,4,6,7,8]
var sum = 0
number.forEach((item, i) => {
  sum = sum + item;
  console.log(`sum : ${sum}`);
});
