import styles from './Frase.module.css'
import Item from './Item'

function List (){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul className={styles.containerList}>
                <Item marca="nike"/>
                <Item marca="adidas"/>

            </ul>
        </>
    )
}

export default List