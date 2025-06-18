let prices = [5, 30, 25, 10, 40, 12];

let total = prices.reduce(sum);

alert(`total ${total}`);

function sum(previous , next){
	return previous + next;
}