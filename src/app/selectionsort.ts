export function selectionsort(arr: number[]) {

    console.log(arr)
    if (arr.length === 0) return null

    for (let i = 0; i < arr.length; i++) {
        
        let min = i

        for(let j = i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }

        const temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
        console.log(arr)
    }

    return arr
    console.log(arr)
}

