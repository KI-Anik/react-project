import { useState } from 'react';
import './Country.css'
const Country = ({info, handleVisitedCountries}) => {
    const {name, flags,population, area} = info;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className= {`country ${visited && 'visited'}`}>
            <h3 style={{color:visited && 'red'}}>Name: {name?.common} </h3>
            <img src= {flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={() => handleVisitedCountries(info)}>Mark visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {
                visited ? 'visite done' : 'not visite yet, will try next'
            }
        </div>
    );
};

export default Country;