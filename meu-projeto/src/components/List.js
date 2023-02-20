import Item from './Item'

function List (){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item/>
                <Item marca="a" ano_lancamento={2019} />

            </ul>
        </>
    )
}

export default List