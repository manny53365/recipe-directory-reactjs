import { useState } from 'react';

import './Create.css'

export default function Create() {

    const [title, setTitle] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [method, setMethod] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title, method, cookingTime)
    };

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
