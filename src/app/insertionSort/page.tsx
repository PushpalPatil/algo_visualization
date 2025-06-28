"use client"
import { InsertionSortVisualizer } from "@/components/visualizers/insertionSortVisualizer";
import { InsertionSortState, insertionSortWithStates } from "@/lib/algorithms/insertionsort";
import { useState, useEffect } from "react";

const sample = [2, 6, 1, 8, 9, 15, 3];

export default function InsertionSort() {

    const [instFrames, setInstFrames] = useState<InsertionSortState[]>([]);
    const [index, setIndex] = useState(0)

    function onButtonClick() {
        setIndex(prev => {
            if (prev + 1 < instFrames.length) return prev + 1;
            return prev
        });
    }

    useEffect(() => {
        const x: InsertionSortState[] = [];
        insertionSortWithStates(sample, state => x.push(state));
        setInstFrames(x)
    }, []);

    if (instFrames.length <= 0) return null;

    return (
        <div className="m-10">
                    <div className="justify-center flex text-4xl from-neutral-300 w-full mb-10" style={{ fontFamily: 'consolas', fontSize: 'extra-large', fontWeight: "light" }}> 
                        insertion sort 
                    </div>
                    <div className="flex flex-direction:column justify-center text-center ">
    
                        <div className="flex-col flex border-1 p-4 border-gray-700 drop-shadow-gray-300 shadow-2xl">
                            <InsertionSortVisualizer state={instFrames[index]} />
                            <section className="flex-row ">
                                <button
                                    onClick={onButtonClick}
                                    className=" justify-center border-1 p-2.5 pl-3 pr-3 mb-15"
                                >
                                    Next
                                </button>
                            </section>
                        </div>
                    </div>
                </div>
    )
}