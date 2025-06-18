/*

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].



*/
var merge = function(intervals) {
    
    if(intervals.length <= 1) return intervals;
    let start = 0;
    let end = 1;

    intervals.sort((a,b) => a[start] - b[start]);
    
    let previous = intervals[0];
    let res = [previous];

    for(let current of intervals){
        if(current[start] <= previous[end]){
            previous[end] = Math.max(current[end], previous[end]);
        }else{
            res.push(current);
            previous = current;
        }
    }
    return res;
}

let intervals = [[1,3],[2,6],[8,10],[15,18]];

let result = merge(intervals);
console.log(result);