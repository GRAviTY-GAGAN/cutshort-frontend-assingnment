import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className='m-container'>
      <div className='field1'>
        <p className='line1'>Welcome! First things first...</p>
        <p className='line2'>You can always change them later.</p>
      </div>
      <div className='field2'>
      <p className='name'>Full Name</p>
      <input 
        placeholder='Steve Jobs'
      />  
      <p className='name'>Display Name</p>
      <input 
        placeholder='Steve'
      />  
      <Link 
      className='link' 
      style={{textDecoration: 'none'}} 
      to={'/setup'}
      >
        <button 
        className='button'
        >
          Create Workspace
        </button>
      </Link> 
      </div>  
    </div>
  )
}

export default Welcome;