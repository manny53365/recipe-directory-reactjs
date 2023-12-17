import { Link } from 'react-router-dom'

import './RecipeList.css'
import { useTheme } from '../hooks/useTheme'
import trash from '../assets/delete_button.svg'
import { projectFirestore } from '../firebase/config'

const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
}

export default function RecipeList({ recipes }) {

    const {mode} = useTheme();

    if (recipes.length === 0){
        return <div className='error'>No recipes to load...</div>
    } else {
        return (
            <div className='recipe-list'>
                {recipes.map(recipe => (
                    <div key={recipe.id} className={`card ${mode}`}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.cookingTime} minutes to make.</p>
                        <div>{recipe.method.substring(0,100)}...</div>
                        <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
                        <img 
                        src={trash}
                        alt="delete recipe button"
                        className='delete'
                        onClick={() => handleClick(recipe.id)}
                        />
                    </div>
                ))}
            </div>
        )
    }
};
