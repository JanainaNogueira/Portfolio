import logo from "../../assets/img/logo.png"
import Styles from "./index.module.css"

function Header(){
    return(
    <div className={Styles.header}>
            <div className={Styles.logo}>
                <img src={logo}/>
            </div>
            <ul className={Styles.navegacao}>
                <li><a>Projects</a></li>
                <li><a>Tecnologies</a></li>
                <li><a>Contact</a></li>
            </ul>
       </div> 
    )
}

export default Header