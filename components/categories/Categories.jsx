import Link from 'next/link';
import { MdFoodBank } from 'react-icons/md';
const Categories = (cats) => {
	const { cats: categories } = cats;
	return (
		<div className='grid grid-cols-5 gap-4 m-12'>
			{categories.map((category) => (
				<Link href={`types/${category.strArea}`}>
					<div className='bg-slate-600 text-xl capitalize p-8 text-center text-white flex justify-center items-center hover:bg-orange-500'>
						<MdFoodBank className=' text-3xl align-middle' />
						<h3>{category.strArea}</h3>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Categories;
