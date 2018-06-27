var numbers = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,1,2,3,4,5,6,7,8,8,4,3,2];

var newNumbers = numbers
	.filter(item => item > 3)
	.reduce((newNumbers, item) => newNumbers + item);
console.log(newNumbers);
