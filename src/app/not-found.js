import style from "./not-found.module.css"
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Link from 'next/link'


export default function NotFound(){
    return (
        <html>
            <body>
                <Menu/>
                <div><h1 className={Styles.Erro}>Página não encontrada!</h1></div>
            
            </body>
        </html>
    )
}
