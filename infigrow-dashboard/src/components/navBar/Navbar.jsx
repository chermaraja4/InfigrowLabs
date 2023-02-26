import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/fontawesome-free-solid'



const NavBar =()=>{

    return (
        <header>
        <div className="header-content">
            <label for="menu-toggle">
                <span className="las la-bars"></span>
                <span className='menu-txt'>Audit Findings</span>   
            </label>
            
            <div className="header-menu">   
                <div className="notify-icon">
                  <FontAwesomeIcon icon={faBell} className='icon'/>
                    <span className="notify">4</span>
                </div>
                <div className="user">                 
                    <span>GP</span>
                </div>
            </div>
        </div>
    </header>
    )

}

export default NavBar;