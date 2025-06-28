import { InsertionSortState, MaybeVisualSortItem } from "@/lib/algorithms/insertionsort";
import { motion } from "framer-motion";



export function InsertionSortVisualizer({ state }: { state: InsertionSortState }) {

    const { array, i, j, insertedIndx, swapped } = state
    console.log("rendering state: ", state)

    const styledBoxes = (array: MaybeVisualSortItem[] | null) => {

        if (!array) return null

        return (
            <div className="flex flex-col items-center gap-20 ">
                <div className="flex flex-row gap-8 pl-4 pr-4">
                    {
                        array.map((item, index) => {
                            console.log(item)

                            if (!item) {
                                return null
                            }
                            const isShifting = swapped && (index === i || index === insertedIndx);
                            let shiftDirection = 0;

                            if (isShifting) shiftDirection = index === i ? -1 : 1;

                            return (
                                <motion.div
                                    key={`ins-${item.id}-${index}`}
                                    layout
                                    layoutId={`box-ins-${item.id}`}
                                    custom={shiftDirection}
                                    variants={{
                                        shift: (direction: number) => ({
                                            x: [0, direction * -85, 0],
                                            y: [0],
                                            zIndex: 1
                                        }),
                                        default: {
                                            y: 0,
                                            x: 0,
                                            zIndex: 0,
                                        },
                                    }}
                                    transition={{ duration: 1, times: [0, 0.7, 1] }}
                                    animate={isShifting ? "shift" : "default"}
                                    className="flex flex-col items-center"
                                >
                                    <div key={`ins-${item.id}-${index}-1`} className="box-border border-1 pl-5 pr-5 border-gray-300 p-4 bg-gray-800 ">
                                        <p className="text-gray-300">{item.value}</p>
                                    </div>

                                    <div key={`ins-${item.id}-${index}-2`} className="justify-center flex">
                                        {j === i && i === index ? (
                                            <div className=" flex flex-row w-full space-x-0.5 ">
                                                <div className=" justify-items-start w-6 h-2 rounded-full bg-blue-300 mt-2" />
                                                <div className=" w-6 h-2 rounded-full bg-green-200 mt-2" />
                                            </div>
                                        ) : index === i ? (
                                            <div className="w-6 h-2 rounded-full bg-blue-300 mt-2" />
                                        ) : index === j ? (
                                            <div className=" w-6 h-2 rounded-full bg-green-200 mt-2" />
                                        ) : (
                                            <div className="w-6 h-2 mt-2 bg-transparent opacity-0" />
                                        )}
                                    </div>

                                    <div key={`ins-${item.id}-${index}-3`} className="justify-center flex">
                                        {
                                            insertedIndx === index ? (
                                                <div className="w-6 h-2 rounded-full bg-red-300 mt-2" />
                                            ) : (
                                                <div className="w-6 h-2 mt-2 bg-transparent opacity-0" />
                                            )
                                        }
                                    </div>
                                </motion.div>
                            )
                        }
                        )}
                </div>

                <div className="flex flex-row p-2 mb-10">
                    <div className="border-1 p-4 border-gray-700">
                        <div className="flex flex-row place-content-evenly">
                            <div className=" justify-items-start" >i : {i} </div>
                            <div className="w-6 h-2 rounded-full bg-blue-300 mt-2" />
                        </div>
                        <div className="flex flex-row place-content-evenly">
                            <div className=" justify-items-start" > j : {j} </div>
                            <div className=" w-6 h-2 rounded-full bg-green-200 mt-2" />
                        </div>
                        <div className="flex flex-row place-content-evenly">
                            <div className=" justify-items-start"> inserted: {insertedIndx} </div>
                            <div className=" w-6 h-2 rounded-full bg-red-200 mt-2" />
                        </div>
                        <div className="flex flex-row place-content-evenly">
                            swapped : {JSON.stringify(swapped)}
                        </div>
                    </div>
                </div>
            </div>
        )

    }

    return (
        <div className="justify-content: space-between flex-direction:column m-20" style={{ fontFamily: 'consolas', fontSize: 'medium', fontWeight: 'light' }}>
            {styledBoxes(array)}
        </div>
    )
}