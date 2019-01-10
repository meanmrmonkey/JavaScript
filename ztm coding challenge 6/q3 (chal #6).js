const letterArray = ["a", "b", "c", "d", "e", "f"];
const input = prompt(`Please enter a hexadecimal or RGB color code.`);
let resultArray = [];
let identifyLetter = /[a-f]/i;
let wrongLetter = /[g-z]/i;

let colorFormatDetect = (input) => {
	if(input.length = 6){
		let array = input.split("");
		array.forEach(function(item){
			if(item.match(wrongLetter)){
				return "This is not a valid hexadecimal";
	} else if {
		let array = input.split(",").map(Number);
		if (array.length == 3 && array.forEach(num => (num < 256))){
			rgbToHex(input);
		} else {
			return "This is not a valid RGB color.";
		}
	}
}

let numberToLetter = (num) => {
	if (num < 10){
		return num;
	} return letterArray[num - 10];
}

let letterToNumber = (item) => {
	letterArray.forEach(function(letter, index){
			if(item == letter){
				let n = (index + 10);
				resultArray.push(n);
			}
	})		
}

let rgbToHex = (input) => {
	let array = input.split(",").map(Number);
	let hexArray = [];
	for(let i = 0; i < array.length; i++){
		let num = array[i];
			let hexEven = Math.floor(num / 16);
			let hexValueEven = numberToLetter(hexEven);
			hexArray.push(hexValueEven);
			let hexOdd = num % 16;
			let hexValueOdd = numberToLetter(hexOdd);
			hexArray.push(hexValueOdd);
	}
	let finalHex = ("#" + hexArray.join(""));
	return finalHex;
}

let hexToRgb = (input) => {
	let array = input.split("");
	let finalRgb = [];
	for(item of array){
		if(item.match(identifyLetter)){
			letterToNumber(item);
		} else {
			resultArray.push(Number(item));
		}
	}
	for(let i = 0; i < resultArray.length; i++){
		if (i % 2 == 0){
			let rgbDigit = ((resultArray[i] * 16) + resultArray[i + 1]);
			finalRgb.push(rgbDigit);
		}
	}return finalRgb;
}

colorFormatDetect(input);

