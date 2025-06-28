import { SelectionSortState } from "@/lib/algorithms/selectionsort";
import { motion } from "framer-motion";
import '@/app/globals.css';
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

    const { array, i, j, minIndex, swapped} = state
    
    const styledBoxes = (array: number[]) => {
        return (
            <div className="flex flex-col items-center gap-20 ">
                <div className="flex flex-row gap-8 pl-4 pr-4">
                {
                array.map((num, index) => 
                {
                    const isSwapping = swapped && (index === i || index === minIndex);
                    let swapDirection = 0;
                    if(isSwapping){ 
                        swapDirection = index === i ? -1 : 1;
                    }

                    return(

                        <motion.div
                            key = {`sel-${num}`}
                            layout
                            layoutId= {`box-sel-${num}`}
                            custom={swapDirection}
                            variants = {{
                                swap: (direction:number) => ({
                                    // how do I calculate the arc to make the boxes switch positions smoothly
                                    // I need to calculate the arc
                                    // boxes have a fixed width and margin (e.g., 56px wide + 32px margin for gap-8),
                                    //          calculate the distance as (otherIndex - index) * (boxWidth + margin).
                                    x : [0 , direction * -85, 0],
                                    y : [0],
                                    zIndex: 1
                                }),
                                default: {
                                    x: 0,
                                    y: 0,
                                    zIndex: 0
                                }
                            }}
                            //It maps each keyframe to a relative “time” within the overall animation duration.
                            // The array values must range from 0 (animation start) to 1 (animation end).
                            //x: [start, middle, end] y: [up, up, down]
                            // start - middle - end : middle = 0.7 = animation will be at that keyframe when 70% of the total duration has passed.
                            transition={{ duration: 1, times: [0, 0.7, 1] }}
                            animate = {isSwapping ? "swap" : "default"}
                            className="flex flex-col items-center"
                        >
                            
                            <div key={`sel-${num}-${index}-1`} className="box-border border-1 pl-5 pr-5 border-gray-300 p-4 bg-gray-800 ">
                                <p className="text-gray-300">{array[index]}</p>
                            </div>

                            <div key = {`sel-${num}-${index}-2`} className="justify-center flex">
                                { j===i && i=== index ? (
                                    <div className=" flex flex-row w-full space-x-0.5 ">
                                        <div className=" justify-items-start w-6 h-2 rounded-full bg-blue-300 mt-2"/>
                                        <div className=" w-6 h-2 rounded-full bg-green-200 mt-2"/>
                                    </div>
                                ): index === i ? (
                                    <div className="w-6 h-2 rounded-full bg-blue-300 mt-2"/>
                                ) : index === j ? (
                                    <div className=" w-6 h-2 rounded-full bg-green-200 mt-2"/>
                                ) :(
                                    <div className="w-6 h-2 mt-2 bg-transparent opacity-0"/>
                                ) }
                            </div>

                            <div key = {`sel-${num}-${index}-3`} className="justify-center flex">
                                {
                                    minIndex === index ? (
                                        <div className="w-6 h-2 rounded-full bg-red-300 mt-2"/>
                                    ) :(
                                        <div className="w-6 h-2 mt-2 bg-transparent opacity-0"/>
                                    )
                                }
                            </div>
                        </motion.div>
                    )
                })
                }
                </div>

                <div className="flex flex-row p-2 mb-10">
                    <div className="border-1 p-4 border-gray-700">
                        <div className="flex flex-row place-content-evenly">
                            <div className=" justify-items-start" >i : {i} </div>
                            <div className="w-6 h-2 rounded-full bg-blue-300 mt-2"/>
                        </div>
                        <div className="flex flex-row place-content-evenly">
                            <div className=" justify-items-start" > j : {j} </div>
                            <div className=" w-6 h-2 rounded-full bg-green-200 mt-2"/>
                            </div>
                        <div className="flex flex-row place-content-evenly">
                            <div className=" justify-items-start"> min: {minIndex} </div>
                            <div className=" w-6 h-2 rounded-full bg-red-200 mt-2"/>
                        </div>
                        <div className="flex flex-row place-content-evenly">
                            swapped : {JSON.stringify(swapped)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="justify-content: space-between flex-direction:column m-20 style={{ fontFamily: 'consolas', fontSize: 'medium', fontWeight:'light'}}">
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