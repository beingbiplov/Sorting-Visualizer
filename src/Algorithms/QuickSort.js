export const getQuickSort = array => {
    let animations = []
    let newArray = array.slice()
    quickSort(newArray, 0, newArray.length-1, animations)
    //console.log(testResult(newArray,array))
    return [ newArray ,animations]

}

const quickSort = (newArray, start, end, animations) => {
  if(start < end) {
   let pivot = partition(newArray, start, end, animations)

   quickSort(newArray, start, pivot - 1, animations)
   quickSort(newArray, pivot + 1, end, animations)
  } 
}

const partition = (newArray, start, end, animations) => { 
  let pivot = end
  let i = start - 1,
      j = start

  while (j < pivot) {
    animations.push(['comparisionOne', j,pivot])
    animations.push(['comparisionTwo', j,pivot])

    if (newArray[j] > newArray[pivot]) {
      j++
    }

    else {
      i++
      // animations.push(['comparisionOne', j,pivot])
      // animations.push(['comparisionTwo', j,pivot])
      animations.push(['comparisionOne', j,i])
      animations.push(['change', i, newArray[j]])
      animations.push(['change', j, newArray[i]])
      animations.push(['comparisionTwo', j,i])
      swap(newArray, j, i)
      j++
    }
  }

  animations.push(['comparisionOne', i+1,pivot])
  animations.push(['change', i+1, newArray[pivot]])
  animations.push(['change', pivot, newArray[i+1]])
  animations.push(['comparisionTwo', i+1,pivot])
  swap(newArray, i + 1, pivot)

  return i + 1
}

const swap = (newArray, firstIndex, secondIndex) => {
  let temp = newArray[firstIndex]
  newArray[firstIndex] = newArray[secondIndex];
  newArray[secondIndex] = temp
}

const testResult = (sortedArray, unSortedArray) =>{
  // console.log(sortedArray)
    const jsSortedArray = unSortedArray.slice().sort((a, b) => a - b);
    //console.log( sortedArray.length, jsSortedArray.length)
    if (sortedArray.length !== jsSortedArray.length) return false
    for (let i=0; i< sortedArray.length; i++){
        if (sortedArray[i] !== jsSortedArray[i]){
            return false
        }
    }
    return true
}