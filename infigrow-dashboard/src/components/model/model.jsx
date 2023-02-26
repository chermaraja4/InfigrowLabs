
import './style.css';
import CardWraper from "../cardWraper/CardWraper";
import Rotate from "../image/Vector.svg";
import { useState } from 'react';




const Model = ({setOpenModel}) => {
    const [status,setstatus]=useState(30);

    const handleClick =()=>{
        setInterval(() => {
            document.getElementById("file").value += 10;
            setstatus( document.getElementById("file").value)
        }, 1000);       
      
    }

    return (

 <CardWraper >
    <div className='model'>
        <div className='close' onClick={()=>{setOpenModel(false)}}> x </div>
        { status===100 ?
        <>
        <div class="circle">
            <div className="checkmark"></div>
            </div>
         <div className='details'>Progress Completed</div>
         <div className='info'>Your Auditing Data Progress is completed successfully. Ready to start your Auditing.</div>
         </>
          : 
         <>
        <img src={Rotate} alt="" className='img' onClick={handleClick}/>
        <div className='details'>Auditing is in progress</div>
        <div className='info'>Do not close or refresh the page. This process may take some time to complete</div>
         </>
        
        }
       
        <div className='progress'>
        <progress id="file" value={status} max="100" className='progress-bar'> 32% </progress>
        <div className='status'> {status}%</div>
        </div>
    </div>

 </CardWraper>

    )
}

export default Model;