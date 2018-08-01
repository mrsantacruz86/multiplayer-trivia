export default (myArray) => {
	let index = Math.floor(Math.random() * myArray.length); 
	return myArray[index];
}