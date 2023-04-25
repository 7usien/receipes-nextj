import Categories from '@/components/categories/Categories';
import {MdOutlineFoodBank} from 'react-icons/md'

const getCats = async () => {
	const data = await fetch(
		'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
	);
	const res = await data.json();
	return res.meals;
};

const Home = async () => {
	const meals = await getCats();


	return (
		<main>
			<h3 className='text-center text-xl mt-10 capitalize text-slate-700'>
				<MdOutlineFoodBank className='inline-block align-middle text-2xl' />
				Your recipes partneer, Browser your receipe from the country you love !</h3>
			<Categories cats={meals} />
		</main>
	);
};

export default Home;
