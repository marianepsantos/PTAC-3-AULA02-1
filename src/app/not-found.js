import styles from './components/not-found.module.css'
import Link from 'next/link'


export default function NotFound(){
    return (
       <div className="not-found">
        <h2 className={styles.Erro}>Página não encontrada</h2>
        <a href="/">Retornar para Home</a>
        </div>     
    )
};
