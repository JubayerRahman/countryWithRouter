import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const country = (props) => {
    return (
        <div className='container appp'>
            <img src={props.country.flags.png} alt='flag'/>
            <div className='countryData'>
            <h3>Name: {props.country.name.common} </h3>
            <h3>Official Name: {props.country.name.official} </h3>
            <h3>Capital: {props.country.capital} </h3>
            <h3>Latlng: {props.country.latlng[0]} , {props.country.latlng[1]} </h3>
            <h3>Region: {props.country.region} </h3>
            <h3>Subregion: {props.country.subregion} </h3>
            <h3>Status: {props.country.status} </h3>
            <h3>Start Of Week: {props.country.startOfWeek} </h3>
            <h3>Population: {props.country.population} </h3>
            </div>
            <Link to='/'> <button class="btn btn-primary">Go back</button> </Link>
        </div>
    );
};

export default country;