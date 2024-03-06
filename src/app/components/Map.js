import React from"react";
import styles from "./map.module.css"

export default function Map() {
    return(
        <iframe className={styles.map}
            id="gmap_canvas"
            src={"https://maps.google.com/maps?"}
            frameborder="0" scrolling="no"
            mirginheight="0"
            marginwidth="0">
        </iframe>
    );
}