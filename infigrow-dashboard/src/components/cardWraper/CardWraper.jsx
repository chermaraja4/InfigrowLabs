import './style.css'

const CardWraper = (props) => {
    return (
        <div className={`card ${props.className}`}>
        <div className='head'> 
            <div className='header'>{props.tittle}</div>   
            <div> 
                { props.videButton &&     
                <button className='view-btn'>View All</button> }
             </div>             
        </div>
            {props.children}
         </div>
    )

}

export default CardWraper;