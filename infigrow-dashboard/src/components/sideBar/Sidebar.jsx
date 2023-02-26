import "./style.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser,faHome ,faCalculator,faHospital,faUsers} from '@fortawesome/fontawesome-free-solid'


const Sidebar =()=>{

const sideBarList=[
{icon:faHome,label:"Dashboard"},
{icon:faCalculator,label:"Auditing"},
{icon:faUser,label:"Messages"},
{icon:faHospital,label:"Your Clients"}];


const userAction=[
    {icon:faHome,label:"setting"},  
    {icon:faUsers,label:"Users"}];

    return (
        <>        
        <div className="sidebar">  
        <div className="side-content">
        <div className="avatar">
            Mc
        </div> 
            <div className="side-menu">
                <ul>
                    {sideBarList.map((list,index)=>{
                        return(
                            <li key={index}>
                            <a href="!#" >                   
                            <FontAwesomeIcon icon={list.icon} className='sidebar-icon'/>
                                 <div >{list.label}</div>
                             </a>
                         </li>
                        )
                    })}                  
                </ul>

                <div className="sidebar-setting">
                <ul>
                    {userAction.map((list,index)=>{
                        return(
                            <li key={index}>
                            <a href="!#" >                   
                            <FontAwesomeIcon icon={list.icon} className='sidebar-icon'/>
                                 <div >{list.label}</div>
                             </a>
                         </li>
                        )
                    })}                  
                </ul>
                </div>
            </div>
        </div>
    </div>
    </>
    )

}

export default Sidebar;