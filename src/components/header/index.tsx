import logo from "../../assets/img/logo.png"
import "./index.css"

function Header(){
    return(
    <div className="header">
            <div className="logo">
                <img src={logo}/>
            </div>
            <ul className="navegacao">
                <li><a>Projects</a></li>
                <li><a>Tecnologies</a></li>
                <li><a>Contact</a></li>
            </ul>
       </div> 
    )
}

export default Header