import React from 'react';
import Header from './component/Header'
import Form from './component/Form'

import CategoryProvider from './context/CategoryContext';
import RecipeProvider from './context/RecipesContext';
import RecipesList from './component/RecipesList';
import ModalProvider from './context/ModalContext';




function App() {
  return (
    <CategoryProvider>
      <RecipeProvider>
        <ModalProvider>
          
        <Header />

        <div className='container mt-5'>
          <div className='row'>
            <Form />
          </div>
        <RecipesList 
        />
        </div>

        </ModalProvider>
      </RecipeProvider>
    </CategoryProvider>
  );
}

export default App;
