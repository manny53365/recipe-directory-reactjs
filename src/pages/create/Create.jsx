import { useRef, useState } from 'react';
// import { useFetch } from '../../hooks/useFetch';
import { projectFirestore } from '../../firebase/config';
import { useHistory } from 'react-router-dom'

import './Create.css'

export default function Create() {

    const [title, setTitle] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [method, setMethod] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null);
    const [submissionError, setSubmissionError] = useState('');
    const history = useHistory();

    // const { postData, data, error} = useFetch('http://localhost:3000/recipes', 'POST');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const doc = {
            title,
            ingredients,
            method,
            cookingTime
        };

        try {
            await projectFirestore.collection('recipes').add(doc);
            history.push('/');
        } catch(err) {
            setSubmissionError(err);
        }
    };

    const handleAdd = (event) => {
        event.preventDefault();
        const ing = newIngredient.trim();

        if (ing && !ingredients.includes(ing)){
            setIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setNewIngredient('');
        ingredientInput.current.focus();
    }

    return(
        <div className='create'>
            <h2 className='page-title'>Add a new recipe</h2>

            {submissionError&& <p className='error'>{submissionError}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title:</span>
                </label>
                <input
                type="text"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                required
                />
                <label>
                    <span>Recipe ingredients:</span>
                    <div className='ingredients'>
                    <input
                    type="text"
                    onChange={event => setNewIngredient(event.target.value)}
                    value={newIngredient}
                    ref={ingredientInput}
                    />
                    <button className='btn' onClick={handleAdd}>add</button>
                    </div>
                </label>
                <p>Current ingredients: {ingredients.map(ingredient => <em key={ingredient}>{ingredient}, </em>)}</p>
                <label>
                    <span>Method:</span>
                </label>
                <textarea
                onChange={(event) => setMethod(event.target.value)}
                value={method}
                required
                />
                <label>
                    <span>Cooking time:</span>
                </label>
                <input
                type="number"
                onChange={(event) => setCookingTime(event.target.value)}
                value={cookingTime}
                required
                />

                <button className='btn'>Submit</button>
            </form>
        </div>
    )
};
