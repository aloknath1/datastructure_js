const  strs = ["eat","tea","tan","ate","nat","bat"];

function group_anagram(strs) {
	let sortedArr = strs.map(word => word.split("").sort().join());
	let hash = {};
	for(let i=0;i<strs.length;i++){
		if(!hash(sortedArr[strs[i]]){
			hash(sortedArr[strs[i]] = [strs[i]];
		}else{
			hash(sortedArr[strs[i]].push(strs[i]);
		}
	}
	return Object.values(hash);
}

let result = group_anagram(strs);
console.log(result);