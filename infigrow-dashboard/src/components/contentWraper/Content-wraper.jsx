import NavBar from "../navBar/Navbar";
import Maincontent from "../mainContent/Maincontent";
import "./style.css"


const ContentWraper = () =>{
    return (
        <div className="main-content">        
        <NavBar/>  
          <main>
              <Maincontent/>
          </main>
          
      </div>
    )
}

export default ContentWraper;