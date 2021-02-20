import React, { useContext } from 'react';
import {RecipesContext} from '../context/RecipesContext'
import RecipeCard from './RecipeCard'


const RecipesList = () => {

const {recipes} = useContext(RecipesContext)

	return (
		<div className='row mt=5'>
			{recipes.map(item => (
				<RecipeCard 
				key={item.idDrink}
				item={item}
				/>
			))}
		</div>

	  );
}
 
export default RecipesList;