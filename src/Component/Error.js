import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='App'>
            <h1>আপনি তো এইখানে আসার কথা না।</h1>
            <Link to='/'> <button>Go back</button> </Link>
        </div>
    );
};

export default Error;