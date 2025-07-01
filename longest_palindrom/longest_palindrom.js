const  str = "babad";

function longest_palindrom(s) {
	let ans = "";
	
	for(let i = 0;i < s.length; i++){
		let odd = expand(i,i,s);
		if(odd.length > ans.length){
			ans = odd;			
		}
		
		let even = expand(i,i+1,s);
		if(even.length > ans.length){
			ans = even;
		}
	}
	return ans;
}


function expand(i,j,s){
	left = i;
	right = j;
	while(left > 0 && right < s.length && s[left] == s[right]){
		left--;
		right++;
	}
	return s.slice(left+1, right);
}
let result = longest_palindrom(str);
console.log(result);