import Image from "next/image";
import Link from "next/link";
import { MdDehaze, MdChevronRight } from 'react-icons/md'

const MealBox = ({strMeal, strMealThumb, idMeal}) => {
	return (
		<div className='bg-slate-200 shadow-md shadow-slate-300 relative'>
			<Link href={`/details/${idMeal}`}>
				<Image
					src={strMealThumb}
					alt={strMeal}
					width={378}
					height={378}
					className='object-cover'
				/>
			</Link>
			<div className='p-3 py-5'>
				<h3 className='text-black text-xl mb-3 text-center'>{strMeal}</h3>

				<span className='bg-blue-500 text-white text-sm px-2 capitalize py-1 hover:bg-orange-400 mr-auto ml-auto block w-fit '>
					<Link href={`/details/${idMeal}`}>
						<MdDehaze className='inline-block align-middle mr-2' />
						recipe details
						<MdChevronRight className='inline-block align-middle ml-2' />
					</Link>
				</span>
			</div>
		</div>
	);
};

export default MealBox;