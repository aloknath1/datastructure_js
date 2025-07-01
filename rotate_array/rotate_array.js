const nums = [1,2,3,4,5,6,7];
const k = 3;

function rotate_array(nums,k) {
	k = k % nums.length;
	nums.reverse();
	revNums(nums,0,k-1);
	revNums(nums,k,nums.length-1);
}

function revNums(nums, start, end){
	while(start < end){
		[nums[start], nums[end]] = [nums[end], nums[start]];
		start++;
		end--;
	}
}

let result = rotate_array(nums,k);
console.log(result);