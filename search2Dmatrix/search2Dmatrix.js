var search2Dmatrix = function(matrix, target) {
    let rows = matrix.length;
	let cols = matrix[0].length;
	let left = 0;
	let right = rows * cols - 1;
	
	while(left <= right){
		let mid = Math.floor(left + (right - left));
		let midVal = matrix[Math.floor(right/cols)][right%cols];
		
		if(target === midVal) return true;
		if(target <  midVal) right = mid - 1;
		else left = mid + 1	
	}
	return false;
};



let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
let target = 20;

alert(search2Dmatrix(matrix, target));
