//question #1: Clean the room function: given an input of (array below),
//make a function that organizes these into individual array that is ordered.
//It should return: [[1,1,1,1], [2,2,2], 4,5,10,[20,20], 391, 392, 591].

let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let array2 = [1, "2", "3", 2];
let strings = [];
let numbers = [];
let separated = [];

let sortArray = () => array.sort(function(a,b){return a-b});

let groupSame = (arr) => {
	debugger
	sortArray(arr);
	let origLength = arr.length;
	let firstItem = arr[0];
	let counter = 0;
	let newArray = [];
	for (let i = 1; i < origLength + 1; i++){
		if (firstItem === arr[i]){
			counter++
		} else {
			if (counter > 0) {
				nestedArray = new Array(counter + 1).fill(firstItem);
				newArray.push(nestedArray);
			} else {
				newArray.push(firstItem);
			}
			firstItem = arr[i];
			counter = 0;
		}
	}console.log(newArray);
}

//question #1 - bonus : Make it so strings are organized differently than
//number types.
let sortByType = (arr) => {
	arr.forEach(item => {
		if (typeof item == "string") {
			strings.push(item);
		} else {
			numbers.push(item);
		}
	})
	separated.push(strings, numbers);
}
