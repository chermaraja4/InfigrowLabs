import './style.css';
import CardWraper from '../cardWraper/CardWraper';
import Card from '../card/Card';
import Pie from '../charts/Pie';


const Revenue = ( )=>{

    const revenueList=[
        {label:"Total Purchase:",cost:"Rs. 8,31,89,497.71"},
        {label:"Total Direct Expenses:",cost:"Rs. 13,82,664.33"},
        {label:"Total Indirect Expenses:",cost:"Rs. 13,82,664.33"},
        {label:"Change in Stock:",cost:"Rs. 13,82,664.33"}];



        const data=[
            {
              "id": "Turnover",
              "label": "51% Total Turnover",
              "value": 51,
              "color": "hsl(268, 70%, 50%)"
            },
            {
              "id": "expenses",
              "label": "5%  Total Indirect expenses",
              "value": 5,
              "color": "hsl(334, 70%, 50%)"
            },
            {
              "id": "Purchase",
              "label": "45% Total Purchase",
              "value": 45,
              "color": "hsl(77, 70%, 50%)"
            },       
          ]
    return (
        <CardWraper tittle="Revenue" videButton>
            <div className='profit'>
              <Card label={'Total Turn Over'} total={'₹ 9,33,78,890'}></Card>
              <Card label={'Net Profit'} total={'₹ 10,29,740'}></Card>
            </div>
            <div style={{height: "400px",width:"100%",padding:"30px"}}>
              <Pie data={data} legend={true}/>
            </div>
            <div className='revenue-data'>
            {revenueList.map((list)=>{
                return(
                    <div className='revenue-list'> 
                    <div className='list-txt'> {list.label} </div>
                    <div className='list-total'>  {list.cost}</div>
                    </div>
                )
            })}
            </div>  
        </CardWraper>
    )
}
export default Revenue;
