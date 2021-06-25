import React from 'react'
import Poster from '../assets/poster.webp';
import './NavComp.css';

const Advertise = () => {
    console.log('on advertise')
    return (
        <div className='advertise'>
            <h2>Advertise at a lowest price and gain more profitss</h2> 
      <img src={Poster} style={{marginTop:'5%'}}/>
        </div>
    )
}

export default Advertise
