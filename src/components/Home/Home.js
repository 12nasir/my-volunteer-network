import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Donation from '../Donation/Donation';
import SingleHome from '../SingleHome/SingleHome';
import './Home.css'


const Home = () => {
    const [homes, setHomes] = useState([]);

    useEffect(() =>{
        fetch('Service.json')
        .then(res => res.json())
        .then(data => {
            setHomes(data)
        })
    }, [])

    return (
        <>
        <div className='header'>
            <h4>I GROW BY HELPING PEOPLE IN NEED</h4>
            <input type="email" value="" />
            <input text="primary" type="button" value="Search" />
            
        </div>
        <div className='home-container'>
         
            {
                homes.map(home =>
                <SingleHome 
                key={home.id}
                home={home}
                ></SingleHome>
                )
            }
            <br />
            <div>
                <Donation></Donation>
                <Blog></Blog>
            </div>
        </div>
        </>
    );
};

export default Home;