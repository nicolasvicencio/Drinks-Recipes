import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'

//Create context

export const CategoryContext = createContext();

//Provider is where are functions and state

const CategoryProvider = (props) => {
	
	//Create state of context

	const [categories, saveCategories] = useState([]);

// Call to api

	useEffect( () => {

		const getCategory = async () => {
			const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`

			const category = await axios.get(url) 

			saveCategories(category.data.drinks)
			
		}
		getCategory()

	}, [categories])

	return (
		<CategoryContext.Provider
		value={{
			categories
		}}
		>
			{props.children}

		</CategoryContext.Provider>
	)


}

export default CategoryProvider