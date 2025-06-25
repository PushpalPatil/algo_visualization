"use client";
import { SelectionSortVisualizer } from "@/components/visualizers/selectionSortVisualizer";
import { SelectionSortState, selectionSortWithStates } from "@/lib/algorithms/selectionsort";
import { useEffect, useState } from "react";

export default function Home() {

  const sample = [1, 4, 2, 5, 3, 7, 8]

  const [frames, setFrames] = useState<SelectionSortState[]>([]);
  const [index, setIndex] = useState(0)

  function onButtonClick() {
    setIndex(prev => prev + 1)

  }

  useEffect(() => {
    const x: SelectionSortState[] = [];
    selectionSortWithStates(sample, state => x.push(state));
    setFrames(x)
  }, []);


  if (frames.length <= 0) return null;

  return (
    <div>
      <SelectionSortVisualizer state={frames[index]} />
      <button onClick={onButtonClick}>Next</button>
    </div>
  );
};


  // frames.forEach(f => {

  //   const x : SelectionSortState[] = []
  //   selectionSortWithStates(sample, state => x.push(state));
  //   setFrames(x);

  // });