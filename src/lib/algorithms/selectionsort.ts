
export function selectionsort(arr: number[]) : number[] | undefined {

console.log(arr)

if (arr.length === 0) return undefined
if (arr.length === 1) return arr

for (let i = 0; i < arr.length; i++) {
    let min = i

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = j
        }
    }

    const temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp

    console.log(arr)
}

return arr

}

export interface SelectionSortState{
    // what data do I need
    // what visual indicators do I need
    // what metadata helps users understand what's happening
    
    array : number[];
    i : number;
    j : number;
    minIndex : number;
    swapped : boolean;
}

// takes in an input array and a callback function and returns a number[] array
// the callback function also takes in an argument of the interface's type ^ and returns nothing
export function selectionSortWithStates(input: number[], onStateChange : (s : SelectionSortState) => void): number[]{
    
    const arr = [...input]
    const arrLen = input.length

    onStateChange({
        array: [...arr],
        i:0,
        j:0,
        minIndex:0,
        swapped:false
    });

    if(arrLen < 2) return input

    for (let i = 0; i < arrLen - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arrLen; j++) {
            onStateChange({
                array: [...arr],
                i,
                j,
                minIndex,
                swapped:false
            });
            if(arr[j] < arr[minIndex]) minIndex = j;
        }

        // if the minimum element's index is not the current index, then swap
        if(minIndex !== i){
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;

            // now we have to show a "swap" state change
            // i here is the first spot the visualizer gets its first element
            // j here is i because that is the only scope we want to define for the state change
            onStateChange({
                array: [...arr],
                i,
                j: i,
                minIndex,
                swapped: true
            })
        }

    }

    // now I have to load the whole state as a final state form before returning the array
    // i, j, and minIndex = arrLen because need to tell the visualizer that no value is currently being selected
    // swapped is now false because we are done swapping / indicates that no swappung to be done.
    onStateChange({
        array: [...arr],
        i: arrLen,
        j: arrLen,
        minIndex : arrLen,
        swapped: false
    })

    return arr
    
}


