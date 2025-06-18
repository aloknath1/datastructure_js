let elements = [{
name: "socks",
degree: 0
},
{
name: "shoes",
degree: 2,
dependsOn:["socks", "pants"]
},
{
name: "office",
degree: 2,
dependsOn:["shoes", "jacket"]
},
{
name: "shirt",
degree: 0
},
{
name: "jacket",
degree: 1,
dependsOn:["shirt"]
},
{
name: "pants",
degree: 0
}];


function topologicalSort(elementsArray) {
	let sortedArray = [];
	let queue = elementsArray.filter((element) => element.degree === 0);
	let array = elementsArray.filter((element) => element.degree !== 0);
	
	while(queue.length){
		let currentNode = queue.shift();
		if(!currentNode){
			queue.length = 0;
		}else{			
			sortedArray.push(currentNode);		
			for(let i=0, len = array.length;i<len;i++){
				let element = array[i];
				let hasdependsOnCurrentNode = element.dependsOn.find((dependency) => { return dependency === currentNode.name });
				if(hasdependsOnCurrentNode){
					array[i].degree--;
					if(array[i].degree === 0){
						queue.push(array[i]);						
					}
				}
			}
		}
	}
	console.log("queue", queue);
	console.log("array", array);
	
	return sortedArray;
}



let result = topologicalSort(elements);
console.log(result);