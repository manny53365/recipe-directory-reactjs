// import { useFetch } from '../../hooks/useFetch';
import { projectFirestore } from '../../firebase/config';

import { useEffect, useState } from 'react';
import RecipeList from '../../components/RecipeList';

import './Home.css';

export default function Home() {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsPending(true);

        projectFirestore.collection('recipes').get().then(snapshot => console.log(snapshot));
    }, [])

    // const {data, isPending, error} = useFetch('http://localhost:3000/recipes');

    return(
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes = {data} />}
        </div>
    )
};
