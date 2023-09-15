import Styles from './index.module.css'
import engine1 from '../../assets/img/engre1.png'
import engine2 from '../../assets/img/engre2.png'
function Projects(){
    return(
        <section className={Styles.container_box}>
            <h2>Projects</h2>
            <div className={Styles.projects}>
                <article className={Styles.project}>
                    <img src={engine1}/>
                    <img src={engine2}/>
                </article>
                <article className={Styles.project}>
                    <img src={engine1}/>
                    <img src={engine2}/>
                </article>
                <article className={Styles.project}>
                    <img src={engine1}/>
                    <img src={engine2}/>
                </article>
                <article className={Styles.project}>
                    <img src={engine1}/>
                    <img src={engine2}/>
                </article>
                <article className={Styles.project}>
                    <img src={engine1}/>
                    <img src={engine2}/>
                </article>
                <article className={Styles.project}>
                    <img src={engine1}/>
                    <img src={engine2}/>
                </article>
            </div>
        </section>
    )
}

export default Projects