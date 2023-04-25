import React from "react";
import { ResultBox } from "./ResultBox";

export const Results = ({ meals }) => {
  const returnedResults = meals?.meals;

  return (
<div className="w-full">
 

      {returnedResults && (
        <>
           <h3 className="text-center text-2xl text-red-500 m-0 capitalize">your search results</h3>
        <div className="grid grid-cols-4 p-12 gap-6 ">
          {returnedResults.map((result, idx) => (
            <ResultBox key={idx} {...result} />
          ))}
        </div>
        </>
      )}
</div>
  );
};
