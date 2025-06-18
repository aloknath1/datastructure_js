let elements = [3,2,6,3,4,1,4,5,8,6,7,6];


function uniqueElements(elementsArray) {
	let uniqueArray = [];
	
	for(let i=0;i<elementsArray.length;i++){
		if(uniqueArray.indexOf(elementsArray[i]) === -1){
			uniqueArray.push(elementsArray[i]);
		}
	}
	return uniqueArray;
	//return [...new Set(elementsArray)]; 
}



let result = uniqueElements(elements);
console.log(result);