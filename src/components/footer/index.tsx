import Styles from './index.module.css'
function Footer(){
    return(
        <section className={Styles.container}>
            <div className={Styles.box_copy}>
                <p>©Todos os direitos reservados 2023</p>
            </div>
        </section>
    )
}

export default Footer