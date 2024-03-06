import Link from "next/link"
import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {

    return(
        <footer className={styles.rodape}>
            <Link href= "https://ead.ifms.edu.br/">  

            <Image
             width={80}
             height={80}
             src={"https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"}
            
            />
            </Link>
            <h1></h1>
            
        </footer>
    );
}