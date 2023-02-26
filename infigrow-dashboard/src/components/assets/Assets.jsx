import "./style.css";
import CardWraper from "../cardWraper/CardWraper";
import Card from "../card/Card";

const Assets = () =>{
    return (
        <CardWraper tittle="Assets / Liabilities">
            <div className="analytics"> 
            <Card label={'Fixed Assets'} total={'₹ 39,52,962'}></Card>
            <Card label={'Outstanding Loans'} total={'₹ 10,29,740'}></Card>
            <Card label={'Cash Balance'} total={'₹ 35,91,586'}></Card>
            <Card label={'Bank Balance'} total={'₹ 4,87,705'}></Card>
            </div>
        </CardWraper>
    )
}
export default Assets;