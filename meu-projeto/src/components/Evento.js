function Evento ({numero}) {
    function meuEvento(){
        console.log(`eae ${numero}`)
    }
    return(
        <div>
        <p>Clique para disparar</p>
        <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento