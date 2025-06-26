import { SelectionSortState } from "@/lib/algorithms/selectionsort";

// does this automatically assign all relative state values to the respective values?
// not sure, but the error went away

// now what do i do with the elements
// I need to use them to change states in some manner.
// how do I know which state to change
// do I need a map: to store keys and their values?
// a map of what? How do I define the value? :

//     {/* Render the array */ }
//     {/* Show visual indicators */ }
//     {/* Display current operation */ }


export function SelectionSortVisualizer({ state }: { state: SelectionSortState }) {


    const { array, i, j, minIndex, swapped } = state

    const styledBoxes = (array: number[]) => {
        return (
            <div className="flex flex-col items-center gap-15">
                 
                <div className="flex flex-row gap-8 p-4">
                    {array.map((num, index) => (
                        <div key={index} className="box-border border-1 pl-5 pr-5 border-gray-300 p-4 bg-gray-800 ">
                            <p className="text-gray-300">{array[index]}</p>
                        </div>
                    ))

                    // when the i/j values change, so does the border color. 
                    
                    }

                </div>

                <div className="flex flex-row p-2">
                    <section className="border-1 p-4 border-gray-700">
                        <p> i index : {i} </p>
                        <p> j index : {j} </p>
                        <p> minimum index: {minIndex} </p>
                        <p> swapped : {JSON.stringify(swapped)} </p>
                    </section>
                </div>

            </div>
        );
    }

    return (

        <div className="justify-content: space-between flex-direction:column m-20">

            {styledBoxes(array)}

        </div>
    )
}


// {
                    
//                     i.map((num, index) => (
//                         <div key = {index} className="box-border-1 border-1 p-3">

//                             <p>{i[index]}</p>
//                         </div>
//                     ))
//                 }