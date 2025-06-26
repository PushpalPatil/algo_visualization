"use client";
import { SelectionSortVisualizer } from "@/components/visualizers/selectionSortVisualizer";
import { SelectionSortState, selectionSortWithStates } from "@/lib/algorithms/selectionsort";
import { useEffect, useState } from "react";

export default function Home() {

  const sample = [1, 4, 2, 5, 3, 7, 8]

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

    <div className="">
      <div className="flex flex-direction:column justify-center text-center">

        <div className="flex-col">

          <SelectionSortVisualizer state={frames[index]} />

          <section className="flex-row ">
            <button
              onClick={onButtonClick}
              className=" justify-center border-1 p-2.5 pl-3 pr-3"
            >
              Next
            </button>
          </section>
        </div>
      </div>
    </div>

  );
};


// frames.forEach(f => {

//   const x : SelectionSortState[] = []
//   selectionSortWithStates(sample, state => x.push(state));
//   setFrames(x);

// });