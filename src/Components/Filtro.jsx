import style from "./Filtro.module.css"
import {BsSliders} from "react-icons/bs"
import {BsFilterLeft} from "react-icons/bs"
function Filtro(props) {
    return (

        <section className={style.fundo}>
            <div className={style.area_bnt}>
                
                    <button>FILTROS <BsSliders /></button>
                    <button>ORDENAR POR: < BsFilterLeft /> </button>
                
            </div>
        </section>

    )
}

export default Filtro