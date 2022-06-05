function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function selectionSort(array) {
    const arr = [...array]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length ; j++) { 
            const minimumNumber = Math.min(...arr.slice(j))
            const minimumNumberIndex = arr.lastIndexOf(minimumNumber);
        if (arr[i] > arr[minimumNumberIndex]) {
            swap(arr, i , j)
        }
        }
    }
    return arr
}
console.log(selectionSort([64,11, 25, 12, 22]))