import React from 'react';
import { Link } from 'react-router-dom';

const Setup = () => {
  return (
    <div className='m-container'>
      <div className='field1'>
        <p className='line1'>Let's set up a home for all your work</p>
        <p className='line2'>You can always create another workspace later.</p>
      </div>
      <div className='field2'>
      <p className='name'>Workspace Name</p>
      <input 
        placeholder='Eden'
      />  
      <p className='name'>WorkspaceURL (optional)</p>
      <div>
        <input 
          className='input1'
          placeholder='www.eden.com/'
        />  
        <input
          className='input2' 
          placeholder='Example' />
      </div>
        <Link 
          className='link'
          style={{textDecoration: 'none'}} 
          to={'/plan'}
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

export default Setup;