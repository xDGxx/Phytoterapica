import styles from "./Footer.module.css"
import image from "../Components/pagamento.png"
import { IconContext } from "react-icons"
import { AiOutlineInstagram } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { GrBlog } from "react-icons/gr"
import { BsYoutube } from "react-icons/bs"
import { AiOutlineTwitter } from "react-icons/ai"
import imagee from "../Components/suguranca.png"
function Footer() {
    return (

        <div className={styles.fundo}>

            <div className={styles.pagamento}>
                <h6>Formas de pagamento</h6>
                <img src={image} alt="pagamento" />
            </div>
            <div className={styles.social}>

                <IconContext.Provider value={{ className: styles.sociais }}>
                    < AiOutlineInstagram />
                    <FaFacebookF />
                    < GrBlog />
                    <BsYoutube />
                    <AiOutlineTwitter />
                </IconContext.Provider>
            </div>
            <div className={styles.security}>
            <h5>Protegido por:</h5>
            <img src={imagee} alt="seguranca" />
            </div>

        </div>
    )
}

export default Footer