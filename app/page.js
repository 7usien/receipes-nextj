import Categories from '@/components/categories/Categories';
import Image from 'next/image';

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
			<Categories cats={meals} />
		</main>
	);
};

export default Home;
