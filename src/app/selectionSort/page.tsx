"use client";
import { SelectionSortVisualizer } from "@/components/visualizers/selectionSortVisualizer";
import { SelectionSortState, selectionSortWithStates } from "@/lib/algorithms/selectionsort";
import { useEffect, useState } from "react";
import '@/app/globals.css';

const sample = [1, 4, 8, 5, 3, 7, 2];

export default function SelectionSort() {

    const [frames, setFrames] = useState<SelectionSortState[]>([]);
    const [index, setIndex] = useState(0)

    function onButtonClick() {
        setIndex(prev => {
            if (prev + 1 < frames.length) return prev + 1;
            return prev
        });
    }

    useEffect(() => {
        const x: SelectionSortState[] = [];
        selectionSortWithStates(sample, state => x.push(state));
        setFrames(x)
    }, []);

    if (frames.length <= 0) return null;

    return (

        <div className="m-10">
            <div className="justify-center flex text-4xl from-neutral-300 w-full mb-10" style={{ fontFamily: 'consolas', fontSize: 'extra-large', fontWeight: "light" }}> 
                selection sort 
            </div>
            <div className="flex flex-direction:column justify-center text-center ">

                <div className="flex-col flex border-1 p-4 border-gray-700 drop-shadow-gray-300 shadow-2xl">
                    <SelectionSortVisualizer state={frames[index]} />
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