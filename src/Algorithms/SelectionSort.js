export const getSelectionSort = (array) =>{
	let animations =[]
	const newArray = array.slice()
	selectionSort(newArray, animations)
	// testing sorted array against jsSort
	//console.log(testResult(newArray, array))
	return [newArray, animations]
}

const selectionSort = (array, animations) =>{
	const n = array.length
	for (let i=0; i<n; i++){
		let smallest = i
		for (let j=i+1; j<n; j++){
			animations.push([j, smallest])
			animations.push([j, smallest])
			if (array[j] < array[smallest]){
				animations.push([smallest, array[j]])
				animations.push([j, array[smallest]])
				
				swap(array,j, smallest)
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
	if (sortedArray.length !== jsSortedArray.length) return false
	for (let i=0; i< sortedArray.length; i++){
		if (sortedArray[i] !== jsSortedArray[i]){
			return false
		}
	}
	return true
}