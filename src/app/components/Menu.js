import Link from "next/link"
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu() {
    return(
        <header className={styles.cabecalho}>
            <div className={styles.s}>
            <Image
             width={50}
             height={50}
             src={"https://www.ifms.edu.br/marcaifms.png"}
            />
             </div>
            <nav className="nav">
                    <nav className="c">   
                    <Link href="/">     
                         <li>Home</li>
                    </Link>
                    </nav>

                    <nav className="c">  
                    <Link href="/registro">
                        <li>Registrar</li>
                    </Link>
                    </nav>

                    <nav className="c">  
                    <Link href="/localizacao">
                        <li>Localização</li>
                    </Link>
                    </nav>
                   
            </nav>
        </header>
    );
}