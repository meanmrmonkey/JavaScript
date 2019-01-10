let reverseString = (string) => {
	let tempArray = string.split("");
	for (let i = string.length; i > 0; i--){
		tempArray.unshift(tempArray.pop(tempArray[i]));
		console.log(tempArray);
	}
}

reverseString("hello");