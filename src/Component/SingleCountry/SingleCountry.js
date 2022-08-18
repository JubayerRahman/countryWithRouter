import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Country from './country'

const SingleCountry = () => {
    const {id} = useParams();
    const [country , setCountry]= useState([])
    useEffect(()=>{
        const url =`https://restcountries.com/v3.1/name/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[id])
    console.log(country);
    // const {name} = country.name.common
    return (
        <div className='App flex-row'>
            <div className='col-12'>
            {country.map(country=> <Country country={country}/>)}
            </div>

            
        </div>
    );
};

export default SingleCountry;