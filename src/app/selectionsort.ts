import { SelectionSortState } from "./selectionsortInterface"

export function selectionsort(arr: number[]) {

    const sort: SelectionSortState = {
        inputArray: arr,
        arrayLength: arr.length,
        indexI: 0,
        indexJ: 0,
        minimum: 0,
        outputArray: arr,
        temp: 0,
        swap: 0,
    }

sort.inputArray = arr;
console.log(arr)



if (arr.length === 0) return undefined
if (arr.length === 1) return arr

for (let i = 0; i < arr.length; i++) {

    let min = i
    sort.minimum = arr[0]

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = j
        }
    }

    const temp = arr[i]
    sort.temp = arr[i]
    sort.swap = arr[min]

    arr[i] = arr[min]
    arr[min] = temp

   
    console.log(arr)
}

sort.outputArray = arr;
console.log(sort)
return arr

}

