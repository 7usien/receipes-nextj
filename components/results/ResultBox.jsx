import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ResultBox = ({
  idMeal,
  strMeal,
  strCategory,
  strArea,
  strMealThumb,
}) => {
  return (
    <div className=" text-black p-0 relative ">
            <Link href={`/details/${idMeal}`} className="">

        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

        <Image className="object-cover" src={strMealThumb} width={378} height={378} alt={strMeal} />
        <div className="absolute bottom-5 left-3 text-white">
            <h3 className="text-xl">{strMeal}</h3>
            <span>
              {strCategory} - {strArea}
            </span>
          </div>

      </Link>
    </div>
  );
};
