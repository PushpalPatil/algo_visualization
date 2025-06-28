import Link from "next/link";

export default function Home() {
  
  return (
    <div style={{ fontFamily: 'consolas', fontSize: 'medium', fontWeight: 'light'}} className="m-15 ">
      <div className="justify-center flex text-4xl   from-neutral-300 w-full "> </div>
      <div className="flex flex-row justify-center text-center mt-15">
          <div className="flex flex-row">
          <Link href="/selectionSort" >
            <button className=" justify-center border-1 p-2.5 pl-3 pr-3">
               Selection Sort
            </button>
            </Link>
         
          <Link href="/insertionSort" >
            <button className=" justify-center border-1 p-2.5 pl-3 pr-3">
               Insertion Sort
            </button>
            </Link>
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