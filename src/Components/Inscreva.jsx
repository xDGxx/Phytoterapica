import styles from "./Inscreva.module.css"
function Inscreva(){
    return(
        <div className={styles.fundo_insc}>
            <div className={styles.texto}>
            <h2 className={styles.h2}>INSCREVA-SE</h2>
            <p className={styles.p}>E RECEBA NOVIDADES E PROMOÇÕES</p>
            </div>
            <div className={styles.caixa}>
                <input type="text" placeholder="Seu e-mail"></input>
            </div>
            <div className={styles.botao}>
                <h3> ASSINAR NEWSLETTER</h3>
            </div>
        </div>
    )
}

export default Inscreva