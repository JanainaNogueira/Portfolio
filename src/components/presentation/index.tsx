import Styles from "./index.module.css"
import imgOwner from '../../assets/img/img-dono.png'

function Presentation(){
    return(
        <section className={Styles.presentation}>
            <div className={Styles.presentation__box}>
                <h1>Janaina Nogueira</h1>
                <p>
                Desenvolvedora front-end e estudante de gradução em análise e desenvolvimento de sistemas. Busco por uma oportunidade de trabalhar profissionalente na área.
                </p>
                <button>Baixar curriculo</button>
            </div>
            <div className={Styles.presentation__image}>
                <img src={imgOwner}/>
            </div>
        </section>
    )
}

export default Presentation