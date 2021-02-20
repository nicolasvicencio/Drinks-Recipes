import React, {useContext,useState} from 'react';
import {CategoryContext} from '../context/CategoryContext'
import {RecipesContext} from '../context/RecipesContext'



const Form = () => {

const {categories} = useContext(CategoryContext)
const {saveQuery, saveConsult} = useContext(RecipesContext)

const [search, saveSearch] = useState({
	name:'',
	category: ''
})

//Function to read user search
const getDataRecipe = e => {
	saveSearch({
		...search,
		[e.target.name]: e.target.value
	})
}


const submitRecipes = (e) => {
	e.preventDefault()

	saveQuery(search)
	saveConsult(true)
}


	return ( 
	<form
	className='col-12'
	onSubmit={submitRecipes}
	>
		<fieldset className='text-center'>
			<legend>Search drinks by category or ingredient</legend>
		</fieldset>
		<div className='row mt-4'>
			<div className='col-md-4 mb-sm-4'>
				<input 
				name='name'
				className='form-control'
				type='text'
				placeholder='Search for ingredient'
				onChange={getDataRecipe}
				/>
			</div>
			<div className='col-md-4 mb-sm-4'>
				<select
				className='form-control'
				name='category'
				onChange={getDataRecipe}
				>
					<option value=''>---Select---</option>
					{categories.map(option => (
					<option 
					key={option.strCategory}
					value={option.strCategory}
					>{option.strCategory}</option>

					))}
				</select>
			</div>
			<div className='col-md-4 mb-5'>
				<input 
				type='submit'
				value='Search drinks'
				className='btn btn-block btn-primary'
				/>
			</div>

		</div>
	</form>
	 );
}
 
export default Form;