//question #2 - Write a javascript function that takes an array of numbers
// and a target number.  The function should find two different numbers
// in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4) should return [1,3]

let array3 = [1, 2, 3, 4, 5, 6, 7, 8];
let answer = [];

let sumToTarget = (arr, target) =>{
	for (let i = 0; i < arr.length; i++){
		for (let j = 1; j < arr.length + 1; j++){
			if ((arr[i] + arr[j]) == target){
				let answerArray = new Array(arr[i], arr[j]);
				answer.push(answerArray);
			}
		}
	}
} 

let targetNumber = prompt("What is the target number?");

sumToTarget(array3, targetNumber);