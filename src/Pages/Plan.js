import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Plan = () => {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);



  return (
    <div className='m-container'>
      <div className='field1'>
        <p className='line1'>How are you planning to use Eden?</p>
        <p className='line2'>We'll streamline your setup experience accordingly.</p>
      </div>
      <div className='field2'>
      <div className='box'>
        <div 
          className={`box1 ${active}`}
          onClick={()=> {setActive(!active);
          setActive1(!active1);}}
        >
            <span className="material-symbols-rounded" id={`i${active}`}>
              person
            </span>
          <p className='my'>For myself</p>
          <p className='team'>Write better. Think more clearly. Stay organized</p>
        </div>
        <div
          className={`box2 ${active1}`}
          onClick={()=> {setActive1(!active1);
          setActive(!active);}}
        > 
          <span className="material-symbols-rounded" id={`i${active1}`}>
            groups
          </span>
          <p className='my'>With my team</p>
          <p className='team'>Wikis, docs, tasks & projects, all in one place</p>
        </div>
      </div>

        <Link 
        className='link' 
        style={{textDecoration: 'none'}} 
        to={'/congratulations'}
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

export default Plan;