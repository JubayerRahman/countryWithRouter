import React, { useEffect, useState } from 'react';
import Countries from '../Coutries/Countries';

const Home = () => {
    const [country , setCountry] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    console.log(country);
    return (
        <div className='container'>
            <div className='App'>
                <h1>World App</h1>
                <p>আর লেখার মতো কিছু নাই, ভালো পরিমাণ মাথা নষ্ট কইরা এইটা বানাইছি। কিন্তু এইটার কাজ কি? কিছুই না। যারা react পারেন বা শিখছেন তারা জানেন এইটা নতুন নতুন বানানোটা কত কষ্টকর। শেষ পর্যন্ত বানাইতে পারছি I am happy now.:)  </p>
            <div className='row justify-content-center'>
            {
                country.map(country=> <Countries country ={country}/>)
            }
            </div>
        </div>
        </div>
    );
};

export default Home;