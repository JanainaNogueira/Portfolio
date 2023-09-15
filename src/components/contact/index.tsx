import Styles from './index.module.css'
import imgRabbit from "../../assets/img/coelho-contact.png"
import imgGihub from "../../assets/img/icons8-github.svg"
import imgGmail from "../../assets/img/icons8-gmail.svg"
import imgLinkedin from "../../assets/img/icons8-linkedin.svg"
import imgInstagram from "../../assets/img/icons8-instagram.svg"
function Contact(){
    return(
        <section className={Styles.container}>
            <figure className={Styles.rabbit}>
                <img src={imgRabbit}/>
            </figure>
            <figure className={Styles.img_contact}>
                <img src={imgGihub}/>
            </figure>
            <figure className={Styles.img_contact}>
                <img src={imgGmail}/>
            </figure>
            <figure className={Styles.img_contact}>
                <img src={imgLinkedin}/>
            </figure>
            <figure className={Styles.img_contact}>
                <img src={imgInstagram}/>
            </figure>
        </section>
    )
}

export default Contact