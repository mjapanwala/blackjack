// function swap(array, i , j) {
//     const locationOne = array[i];
//     const locationTwo = array[j];
//     array[i] = locationTwo;
//     array[j] = locationOne
// }

// function bubbleSort(array) {
// for (let i =0; i < array.length; i++) {
//     for (let j = i + 1; j <array.length; j++) {
//         if (array[i] > array[j]) {
//             swap(array, i , j)
//         }
//     }
// }
// return array
// }

// console.log(bubbleSort([4, 2, 9, 2, 8, 1, 7]))


// function swap(array, currentIndex, minimumNumberIndex) {
//    const currentValue = array[currentIndex];
//    const minimumNumber = array[minimumNumberIndex];
//    console.log(currentValue, minimumNumber)
// }

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


