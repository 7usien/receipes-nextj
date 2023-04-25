import Image from "next/image";
import Link from "next/link";
import { MdOutlineMissedVideoCall } from "react-icons/md";

const getReceipe = async (receipeId) => {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${receipeId}`
  );
  const res = await data.json();
  return res;
};

const RecipeDetails = async ({ params }) => {
  const receipeId = params.idMeal;
  const { meals } = await getReceipe(receipeId);

  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
  } = meals[0];

  return (
    <main className="grid grid-cols-12 p-4 gap-4">
      <div className="col-span-6 h-auto">
        <span className="absolute">
          {strArea} - {strCategory}
        </span>
        <Image className="h-full object-cover relative" src={strMealThumb} alt={strMeal} width={800} height={800} />
      </div>
      <div className="h-auto w-auto col-span-6">
        <h3 className="text-2xl text-cyan-600 mb-3">{strMeal}</h3>
        <p className="border-t-2 py-2 text-slate-800">{strInstructions}</p>

{strTags && (
        <div className="bg-slate-500 text-white p-2 rounded-xl shadow-lg my-4">
          <h3 className="text-xl border-b-2 pb-1 mb-2 ">tags : </h3>
          {strTags}
        </div>
        )}

        <div>
<h3 className="my-3 capitalize text-2xl">ingridents List : </h3>

<ul className="flex gap-2 flex-wrap max-lg">
          {strIngredient1 && <li className="bg-cyan-600 p-2 text-white rounded">{strIngredient1}</li>}
          {strIngredient2 && <li className="bg-cyan-600 p-2 text-white rounded">{strIngredient2}</li>}
          {strIngredient3 && <li className="bg-cyan-600 p-2 text-white rounded">{strIngredient3}</li>}
          {strIngredient4 && <li className="bg-cyan-600 p-2 text-white rounded">{strIngredient4}</li>}
          {strIngredient5 && <li className="bg-cyan-600 p-2 text-white rounded">{strIngredient5}</li>}
          {strIngredient6 && <li className="bg-cyan-600 p-2 text-white rounded">{strIngredient6}</li>}
          {strIngredient7 && <li className="bg-cyan-600 p-2 text-white rounded">{strIngredient7}</li>}
          {strIngredient8 && <li className="bg-cyan-600 p-2 text-white rounded">{strIngredient8}</li>}
          {strIngredient9 && <li className="bg-cyan-600 p-2 text-white rounded">{strIngredient9}</li>}
          {strIngredient10 && <li className="bg-cyan-600 p-2 text-white rounded">{strIngredient10}</li>}
        </ul>

        </div>

        <div className=" mt-4">
          <h3 className="text-red-600 font-bold">Youtube video : </h3>

          <Link href={strYoutube}>
            <MdOutlineMissedVideoCall className="inline-block align-middle" /> Watch youtube video
          </Link>
        </div>
      </div>
    </main>
  );
};

export default RecipeDetails;
