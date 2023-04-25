import MealBox from '@/components/mealBox/MealBox';
import React from 'react';

const getMealsByTypes = async (type) => {
	const data = await fetch(
		`https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
	);
	const res = await data.json();
	return res;
};

const PageTypes = async ({ params }) => {
	const { types } = params;

	const {meals} = await getMealsByTypes(types);
 return (
		<div className='grid grid-cols-4 gap-8 m-4'>
			{meals?.map((meal, idx) => (
				<MealBox key={idx} {...meal} />
			))}
		</div>
	);
};
export default PageTypes;
