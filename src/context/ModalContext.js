import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios'

export const ModalContext = createContext();


const ModalProvider = (props) => {

// Provider state

const [idrecipe, saveIdRecipe] = useState(null)
const [fullrecipe, saveFullRecipe] = useState({})

useEffect(() => {
	const consultAPI = async () => {
		if(!idrecipe) return

		const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`
		const res = await axios.get(url)

		saveFullRecipe(res.data.drinks[0])
	}

consultAPI()

}, [idrecipe])



	return(
		<ModalContext.Provider
		value={{
			fullrecipe,
			saveIdRecipe,
			saveFullRecipe
		}}
		>
			{props.children}

		</ModalContext.Provider>
	
	)
} 

export default ModalProvider