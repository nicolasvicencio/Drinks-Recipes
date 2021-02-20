import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'



function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		width: 450,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));




const RecipeCard = ({ item }) => {

	//Modal Config material ui

	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false)

	const classes = useStyles()

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}




	const {saveFullRecipe, fullrecipe, saveIdRecipe } = useContext(ModalContext)


	console.log(fullrecipe)
	const { strDrink, strDrinkThumb, idDrink } = item


	//show and format the info

	const showIngredients = (info) => {
		let ingredient = []

		for(let i = 1; i< 16 ; i++){
			if(fullrecipe[`strIngredient${i}`]){
				ingredient.push(
					<li><b>{fullrecipe[`strIngredient${i}`]}</b> : {fullrecipe[`strMeasure${i}`]}</li>
				)
			}
		}
		
		return ingredient
		
	}

	

	return (
		<div className='col-md-4 mb-3'>
			<div className='card'>
				<h2 className='card-header'>{strDrink}</h2>
				<img className='card-img-top ' src={strDrinkThumb} alt={strDrink} />
				<div className='card-body'>
					<button
						type='button'
						className='btn btn-block btn-primary'
						onClick={() => {
							saveIdRecipe(idDrink)
							handleOpen()
						}}
					>See Recipe</button>

					<Modal
					open={open}
					onClose={() => {
						saveIdRecipe(null)
						saveFullRecipe({})
						handleClose()
					}}
					>
						<div style={modalStyle} className={classes.paper}>
							<h2>{fullrecipe.strDrink}</h2>
							<h3 className='mt-4'>Instructions</h3>
							<p>{fullrecipe.strInstructions}</p>
							<img className='img-fluid my-4' src={fullrecipe.strDrinkThumb} />
							<h3>Ingredients & amounts</h3>
							<ul>
								{showIngredients(fullrecipe)}
							</ul>

						</div>
					</Modal>
				</div>

			</div>
		</div>
	);
}

export default RecipeCard;