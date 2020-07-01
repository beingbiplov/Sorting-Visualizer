export const getInsertionSort = array => {
    let animations = []
    const newArray = array.slice()
    InsertionSort(newArray, animations)
    //console.log(testResult(newArray,array))
    return [ newArray ,animations]

}

const InsertionSort = (array, animations) => {
    let n = array.length
    for (let i =1; i<n; i++){
        let key = array[i]
        let j = i-1
        let k = i
        animations.push(['comparisionOne', i,j])
        animations.push(['comparisionTwo', i,j])
        while(j>=0 && array[j]>key){
            animations.push(['change', j+1, array[j]])
            animations.push(['change', j, array[j+1]])
            let temp = array[j+1]
            array[j+1]=array[j]
            array[j] = temp
            j = j-1
            k = k-1
            if (j >= 0){
                animations.push(['comparisionOne', k,j])
                animations.push(['comparisionTwo', k,j])
            }
        }
    }
    return array
       
}

const testResult = (sortedArray, unSortedArray) =>{
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