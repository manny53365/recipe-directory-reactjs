import { useParams } from 'react-router-dom';

// import { useFetch } from '../../hooks/useFetch';
import { projectFirestore } from '../../firebase/config';
import { useEffect, useState } from 'react';

import './Recipe.css';
import { useTheme } from '../../hooks/useTheme';

export default function Recipe() {

    const { id } = useParams()
    // const {data: recipe, isPending, error} = useFetch(`http://localhost:3000/recipes/${id}`)
    const { mode } = useTheme();

    const [recipe, setRecipe] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsPending(true);

        projectFirestore.collection('recipes').doc(id).get().then(docSnapshot => {
            if (docSnapshot.exists){
                setIsPending(false);
                setRecipe(docSnapshot.data());
            } else {
                setIsPending(false);
                setError('Could not find the recipe');
            }
        })
    }, [id])

    return(
        <div className={`recipe ${mode}`}>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && 
            <div>
                <h2 className='page-title'>{recipe.title}</h2>
                <p>Takes {recipe.cookingTime} to cook.</p>
                <ul>
                    {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                </ul>
                <p className='method'>{recipe.method}</p>
            </div>}
        </div>
    )
};
