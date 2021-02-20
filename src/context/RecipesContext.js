import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'


export const RecipesContext = createContext();


const RecipeProvider = (props) => {


	const [query, saveQuery] = useState({
		ingredient: '', 
		category: ''
	})
	const [recipes, saveRecipes] = useState([])
	const [consult , saveConsult] = useState(false)

	useEffect(() => {
		if(consult){
			const getRecipes = async () => {
				const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query.ingredient}&c=${query.category}`
				const res = await axios.get(url)
	
				console.log(res.data)
				saveRecipes(res.data.drinks)
			}
			getRecipes() 

		}else{

		}


	},[query, consult ])

	return (
		<RecipesContext.Provider
		value={{
			saveQuery,
			recipes,
			saveConsult
			

		}}
		>
			{props.children}

		</RecipesContext.Provider>
	)
} 

export default RecipeProvider