
export function insertionsort(arr: number[]): number[] | undefined {
    console.log(arr)
    if (arr.length === 0) return undefined
    if (arr.length === 1) return arr

    // interating through array
    // company current value to the one on it's left until all are sorted
    // O(n^2) time complexity i think
    // to the LEFT is the key word. meaning. current value is 1 step ahead. 

    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {

            arr[j + 1] = arr[j];
            j--;

        }

        arr[j + 1] = current;
        console.log("2.", arr)
    }
    console.log("3.", arr)
    return arr

}


export type VisualSortItem = { value: number; id: number };
export type MaybeVisualSortItem = VisualSortItem | null;

export interface InsertionSortState {
    // what data do I need
    // what visual indicators do I need
    // what metadata helps users understand what's happening
    array: MaybeVisualSortItem[];
    i: number;
    j: number;
    insertedIndx: number;
    swapped: boolean;
}



// takes in an input array and a callback function and returns a number[] array
// the callback function also takes in an argument of the interface's type ^ and returns nothing
export function insertionSortWithStates(input: number[], onStateChange: (s: InsertionSortState) => void): MaybeVisualSortItem[] {

    const arr: MaybeVisualSortItem[] = input.map((value, i) => ({ value, id: i }));

    const arrLen = input.length

    

    onStateChange({
        array: [...arr],
        i: 0,
        j: 0,
        insertedIndx: 0,
        swapped: false
    });

    console.log("1", arr)


    for (let i = 1; i < arrLen; i++) {
        const current = arr[i];
        let j = i - 1;
        arr[i] = null;
        console.log("2", arr)

        onStateChange({
            array: [...arr],
            i,
            j,
            insertedIndx: -1,
            swapped: false
        });

        console.log("3", arr)

        while (j >= 0 && arr[j] && current && arr[j]!.value > current.value) {

            arr[j + 1] = arr[j];

            onStateChange({
                array: [...arr],
                i,
                j,
                insertedIndx: -1,
                swapped: true
            });
            console.log("4", arr)
            j--;

        }

        arr[j + 1] = current;
        console.log("5", arr)

        onStateChange({
            array: [...arr],
            i,
            j,
            insertedIndx: j + 1,
            swapped: false
        })
        console.log("6", arr)

    }

    onStateChange({
        array: [...arr],
        i: arrLen,
        j: arrLen,
        insertedIndx: -1,
        swapped: false
    })
    console.log("7", arr)
    return arr.filter(Boolean) as MaybeVisualSortItem[];

}




