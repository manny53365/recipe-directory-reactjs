import { useRef, useState } from 'react';

import './Create.css'

export default function Create() {

    const [title, setTitle] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [method, setMethod] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title, method, cookingTime, ingredients)
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
                </label>
                <div className='ingredients'>
                    <input
                    type="text"
                    onChange={event => setNewIngredient(event.target.value)}
                    value={newIngredient}
                    ref={ingredientInput}
                    />
                    <button className='btn' onClick={handleAdd}>add</button>
                </div>
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
