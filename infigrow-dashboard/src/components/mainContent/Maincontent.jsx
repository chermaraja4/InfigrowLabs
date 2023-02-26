import './style.css'
import PageHeader from '../pageHeader/PageHeader';
import Assets from '../assets/Assets';
import Revenue from '../revenue/Revenue';
import Expenses from '../expenses/Expenses';
import Table from '../table/table';

const Maincontent =() =>{

    const DebitorsData=[
        {label:"Card Sales Customer:",cost:"Rs. 11,22,923.48"},
        {label:"KP Retail:",cost:"Rs. 4,17,086.0"},
        {label:"Orion Hospital",cost:"Rs. 1,20,345.88"},
        {label:"Season Travels",cost:"Rs. 51,000.0"},
        {label:"ODPC Power Limited",cost:"Rs. 18,498.0 "},
        {label:"Total Direct Expenses:",cost:"Rs. 13,82,664.33"},
        {label:"Total Indirect Expenses:",cost:"Rs. 13,82,664.33"},
        {label:"Change in Stock:",cost:"Rs. 13,82,664.33"},
    ];

    
    const Creditors=[
        {label:" SK Mills",cost:"Rs. 8,31,89,497.71"},
        {label:"SSD Chocolates",cost:"Rs. 13,82,664.33"},
        {label:"RK Hotels",cost:"Rs. 13,82,664.33"},
        {label:"Star Bakers",cost:"Rs. 13,82,664.33"},
        {label:"Season Travels",cost:"Rs. 8,31,89,497.71"},
        {label:"Total Direct Expenses:",cost:"Rs. 13,82,664.33"},
        {label:"Total Indirect Expenses:",cost:"Rs. 13,82,664.33"},
        {label:"Change in Stock:",cost:"Rs. 13,82,664.33"},
    ];

    return(
        <>   
        <PageHeader/>
<div className="page-content">
        <div className="containter">
            <div className='item content1'><Assets/> </div>
            <div className='item content2'><Expenses/> </div>
            <div className='item content3'> <Revenue/> </div>
        </div>
        <div className="table-container">
            <div className='TopDebitors'><Table Data={DebitorsData}/> </div>
            <div className='Creditors'><Table Data={Creditors}/> </div>    
        </div>
 </div>
 </>
    )

}
export default Maincontent;