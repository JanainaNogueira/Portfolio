import Styles from './index.module.css'
import imgHtml from '../../assets/img/icons8-html-5.svg'
import imgCss from '../../assets/img/icons8-css3.svg'
import imgJs from '../../assets/img/icons8-logotipo-javascript.svg'
import imgReact from '../../assets/img/icons8-react.svg'
import imgRabbit from '../../assets/img/coelho-stacks.png'
function Stacks(){
    return(
        <section className={Styles.box_stacks}>
            <figure className={Styles.stacks}>
                <img src={imgHtml}/>
            </figure>
            <figure className={Styles.stacks}>
                <img src={imgCss}/>
            </figure>
            <figure className={Styles.stacks}>
                <img src={imgJs}/>
            </figure>
            <figure className={Styles.stacks}>
                <img src={imgReact}/>
            </figure>
            <figure className={Styles.image_rabbit_stacks}>
                <img src={imgRabbit} alt=""/>
            </figure>
        </section>
    )
}
export default Stacks