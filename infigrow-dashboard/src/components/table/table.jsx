import './style.css';
import CardWraper from "../cardWraper/CardWraper";

const Table = ({Data}) =>{

    return (
       <CardWraper tittle='Top Debitors' viewButton className='table-wrap'>
        <div className='Debitors-wrap'> 
        {Data.map((list,index)=>{
            return (
                <div key={index} className ="Debitors"> 
                    <div className='label'> {list.label}</div>
                    <div className='cost'> {list.cost}</div>
                </div>
            )
        })}
        </div>
      


       </CardWraper>
    )
}

export default Table;