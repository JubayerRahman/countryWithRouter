import React from 'react';
import { Link } from 'react-router-dom';
import './countryStyle.css'

const Countries = (props) => {
    const {name ,flags } = props.country
    return (
        <div className='App country container col-md-3'>
            <div className=''>
            <div class="card cardCountry">
            <img src={flags.png} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Name: {name.common}</h5>
                <p class="card-text">Official Name: {name.official}</p>
                <Link to={`/singlecounry/${name.common}`}><button class="btn btn-primary">More About {name.common}</button></Link>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Countries;