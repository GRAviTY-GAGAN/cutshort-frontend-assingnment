import React from 'react';
import { Link } from 'react-router-dom';
import tik from '../Img/tik.png';

const Congratulations = () => {
  return (
    <div className='m-container'>
      <div className='tik'><img className='itik' src={ tik } alt='tik' /></div>
      <div className='field1'>
        <p className='line1'>Congratulations, Eden!</p>
        <p className='line2'>You have completed onboarding, you can start using the Eden!</p>
      </div>
      <div className='field2'>
      
        <Link className='link' style={{textDecoration: 'none'}} to={'/'}><button 
        className='button'
      >Create Workspace</button></Link> 
      
      </div>  
    </div>
  )
};

export default Congratulations;
