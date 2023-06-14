import React from 'react';
import './Work.scss';
import vector from "../../assets/images/workplace/vector.svg";


const Workplace = () =>{
  return (
    <>
        <div className='workspace-main'>
            <h3 className='workspace-title'>Pinned</h3>
            <button>
                <p>Yarra one</p>
                <span>
                    <img src={vector} alt='workplace1'/>
                </span>
            </button>
        </div>
    </>
  );
}

export default Workplace;
