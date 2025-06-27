import Link from "next/link";

export default function Home() {


  return (

    <div className="">

      <div className="justify-center flex text-4xl font-medium font-mono from-neutral-300 w-full mt-15"> pick a sort! </div>
      <div className="flex flex-row justify-center text-center mt-5">
          <div className="flex flex-row">
          <Link href="/selectionSort">
            <button className=" justify-center border-1 p-2.5 pl-3 pr-3">
               Selection Sort 
            </button>
            </Link>
         
          <Link href="/selectionSort">
            <button className=" justify-center border-1 p-2.5 pl-3 pr-3">
               Bucket Sort 
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