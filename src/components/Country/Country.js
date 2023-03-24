import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, area, region, flags} = props.country;
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt={flags.alt} />
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;