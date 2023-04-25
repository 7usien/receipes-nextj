import React from 'react';

export default function page() {
	return <div className='w-full px-32 py-16'>
<h3 className='text-2xl border-b-2 mb-2 pb-4'>Code App</h3>
<p>
Welcome to the recipe app built with Next.js 13! Our app uses the meal database API (https://www.themealdb.com/api.php) to fetch recipes for different categories and display their details.

</p>
<p>
On the homepage of the app, you will see a list of categories such as breakfast, lunch, dinner, dessert, etc. Clicking on any category will take you to a page that shows all the recipes in that category. Each recipe is displayed with a thumbnail image, recipe name, and a short description.
</p>

<p>
When you click on any recipe, you will be taken to a page that displays the recipe's details. You can view the recipe's ingredients, instructions, and even a YouTube video on how to prepare the dish.
</p>

	</div>;
}
