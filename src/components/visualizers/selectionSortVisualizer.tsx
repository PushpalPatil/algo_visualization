import { SelectionSortState } from "@/lib/algorithms/selectionsort"
import {motion, AnimateSharedLayout} from 'framer-motion'


export function SelectionSortVisualizer({ state }: { state: SelectionSortState }) {

    // does this automatically assign all relative state values to the respective values?
    // not sure, but the error went away
    const {array, i , j, minIndex, swapped} = state

    // now what do i do with the elements
    // I need to use them to change states in some manner.
    // how do I know which state to change
    // do I need a map: to store keys and their values? 
    // a map of what? How do I define the value? : 
    

    return (
        {/* Render the array */ }
        {/* Show visual indicators */ }
        {/* Display current operation */ }

        <div>
            <h1>
              
            </h1>
        </div>
    )
}