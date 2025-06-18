let a = "This is a longest substring ding program";

function longestWord(a){
let arr = a.split(" ");
let maxCount = 0;
for(let i=0;i<arr.length;i++){
	maxCount = Math.max(maxCount, arr[i].length);
}
return maxCount;
}

alert(longestWord(a));