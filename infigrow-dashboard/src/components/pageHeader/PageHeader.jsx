
import './style.css'
import { faPlay} from '@fortawesome/fontawesome-free-solid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Model from '../model/model';
import { useState } from 'react';
const PageHeader =()=>{
    const [openModel,setOpenModel]=useState(false)
    return (
        <div className="page-header">
            <div className='left-side'>
                <div className='first-Session'>
                    <div className='place'> Star Technologies, Mumbai</div>
                     <div className='date'> 01-Apr-2022 To 31-Mar-2023</div>
                </div>
                <div className='devide'></div>
                <div className='second-Session'> 
                  <div className='place'>  Run Audit</div>
                  <div  className='play-icon' onClick={()=>{setOpenModel(true)}}>   
                  <FontAwesomeIcon icon={faPlay} className='sidebar-icon'/> 
                  </div>
               </div>
            </div>
            <div>
                <button className='button'>Audit Manually</button>
            </div> 
            <div className='open-model'> 
            {openModel && <Model setOpenModel={setOpenModel}/>  }</div> 
           
        </div>
    )
}
export default PageHeader;