import './style.css';

const Card = ({label,total}) =>{
    return (
    <div className='small-card'>
        <div className='card-label'>{label}</div>
        <div className='cost'>{total}</div>
    </div>
    )
}


export default Card;