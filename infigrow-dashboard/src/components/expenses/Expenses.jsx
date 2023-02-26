import './style.css';
import CardWraper from "../cardWraper/CardWraper";
import Pie from '../charts/Pie';

const Expenses = () =>{

    
    const data=[
        {
          "id": "Expenses",
          "label": "53% Employee Benefit Expenses",
          "value": 53,
          "color": "hsl(268, 70%, 50%)"
        },
        {
          "id": "Maintenance",
          "label": "4% Repairs & Maintenance",
          "value": 4,
          "color": "hsl(334, 70%, 50%)"
        },
        {
          "id": "Rental",
          "label": "25% Rental Expenses",
          "value": 25,
          "color": "hsl(77, 70%, 50%)"
        },
        {
          "id": "Office",
          "label": "5% Office Maintenance",
          "value": 5,
          "color": "hsl(108, 70%, 50%)"
        },
        {
          "id": "Administrative",
          "label": "13% Administrative",
          "value": 13,
          "color": "hsl(52, 70%, 50%)"
        }
      ]
    return (
        <CardWraper tittle='Top 5 expenses' videButton>
           <div className='expenses'> 
            <div className='left-side' style={{height: "330px",width:"100%",padding:"30px"}}> 
               <Pie data={data}  legend={true}/>
             </div>           
           </div>
        </CardWraper>

    )
}
export default Expenses;
