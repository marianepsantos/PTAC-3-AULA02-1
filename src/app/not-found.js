import styles from './components/not-found.module.css'
import Link from 'next/link'
import "./components/menu.module.css"
import "./components/footer.module.css"


export default function NotFound(){
    return (
       <div className="not-found">
        <h2 className={styles.Erro}>Página não encontrada</h2>
        <button>  <a href= "/"> Voltar para a Home </a> </button> 
        </div>     
    )
};
