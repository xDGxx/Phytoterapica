import styles from "./Header.module.css"
import { AiOutlineUser } from "react-icons/ai"
import { BsCart2 } from "react-icons/bs"
import {IconContext} from "react-icons"
function Header(props) {
    return (
        <div className={styles.header}>

            <div className={styles.logo}></div>
            <div className={styles.pesquisa}>
                <i class="fas fa-search"></i>
                <p>O que você procura?</p>
            </div>
            <div className={styles.desconto}>
                <p>-5% NA PRIMEIRA COMPRA</p>
                <i class="fa-sharp fa-light fa-percent"></i>
            </div>

            <IconContext.Provider value={{ className: styles.icones }}>
                <BsCart2 />
                <AiOutlineUser />

            </IconContext.Provider>



        </div>
    )
}

export default Header