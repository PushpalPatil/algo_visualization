
export function insertionsort(arr: number[]) : number[] | undefined {

    console.log(arr)

    if (arr.length === 0) return undefined
    if (arr.length === 1) return arr


    // interating through array
    // company current value to the one on it's left until all are sorted
    // O(n^2) time complexity i think
    // to the LEFT is the key word. meaning. current value is 1 step ahead. 

    for(let i = 1; i<arr.length; i++){

        const current = arr[i];
        let j = i-1;


        while(j>=0 && arr[j] > current){

            arr[j+1] = arr[j];
            j--;
            
        }

        arr[j+1] = current;

        console.log("2.", arr)
    }

    console.log("3.", arr)

    return arr

}



export interface InsertionSortState{
    // what data do I need
    // what visual indicators do I need
    // what metadata helps users understand what's happening
    
    array : number[];
    i : number;
    j : number;
    current: number,
    swapped : boolean;
}

// takes in an input array and a callback function and returns a number[] array
// the callback function also takes in an argument of the interface's type ^ and returns nothing
export function insertionSortWithStates(input: number[], onStateChange : (s : InsertionSortState) => void): number[]{
    
    const arr = [...input]
    const arrLen = input.length

    onStateChange({
        array: [...arr],
        i:0,
        j:0,
        current: 0,
        swapped:false
    });

    if(arrLen < 2) return input

    for (let i = 1; i < arrLen; i++) {
        let current = arr[i];
        let j = i-1;

        while(j>=0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
            onStateChange({
                array: [...arr],
                i,
                j,
                current,    
                swapped:true
            });
            
        }

        arr[j+1] = current;

            onStateChange({
                array: [...arr],
                i,
                j,
                current,
                swapped: true
            })
        

    }

    onStateChange({
        array: [...arr],
        i: 0,
        j: 0,
        current: 0,
        swapped: false
    })

    return arr
    
}




