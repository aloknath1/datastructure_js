var mergeSortedArray = function(a,b) {
    let sortedArr = [], indexA = 0, indexB = 0;
	while(indexA < a.length && indexB < b.length){
		if(sortFn(a[indexA],b[indexB]) > 0){
			sortedArr.push(b[indexB++]);
		}else{
			sortedArr.push(a[indexA++]);
		}
	}
	
	if(indexB < b.length){
		sortedArr = sortedArr.concat(b.slice(indexB));
	}else{
		sortedArr = sortedArr.concat(a.slice(indexA));
	}
	
	return sortedArr;
};

function sortFn(a,b){
	return a-b;
}

let a = [1,2,3,5,9];
let b = [4,6,7,8];
alert(mergeSortedArray(a,b));
