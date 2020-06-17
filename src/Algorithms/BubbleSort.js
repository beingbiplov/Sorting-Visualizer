export const getBubbleSort = (array) =>{
	let animations = []
	const newArray = array.slice()
	bubbleSort(newArray, animations)
	// testing sorted aray against jsSort
	//console.log(testResult(newArray,array))
	return animations
}

const bubbleSort = (array, animations) =>{
	const n = array.length
	for (let i=0; i<n-1; i++){
		for (let j=0; j<n-i-1; j++){
			animations.push([j, j+1])
			animations.push([j, j+1])

			if (array[j] > array[j+1]){
				animations.push([j, array[j+1]])
				animations.push([j+1, array[j]])
				swap(array, j, j+1)
			}
				
			else{
				animations.push([-1, -1])
				animations.push([-1, -1])
			}
				
	    }
    }
	return array
}

const swap =(array, i, j) =>{
	let temp = array[i]
	array[i] = array[j]
	array[j] = temp
}

const testResult = (sortedArray, unSortedArray) =>{
	const jsSortedArray = unSortedArray.slice().sort((a, b) => a - b);
	console.log( sortedArray.length, jsSortedArray.length)
	if (sortedArray.length !== jsSortedArray.length) return false
	for (let i=0; i< sortedArray.length; i++){
		if (sortedArray[i] !== jsSortedArray[i]){
			return false
		}
	}
	return true
}