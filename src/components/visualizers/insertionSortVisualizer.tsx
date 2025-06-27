import { InsertionSortState } from "@/lib/algorithms/insertionsort";



export function InsertionSortVisualizer({ state }: { state: InsertionSortState }) {

    const { array, i, j, current, swapped} = state

    return(
        <div>
            {array}, {i}, {j}, {current}, {swapped}
        </div>
    )
}