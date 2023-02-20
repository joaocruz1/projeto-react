import Button from "./Button"

function Evento () {

    function meuEvento(){
        console.log(`eae`)

    }
    function segundoEvento(){
        console.log('eae2')
    }
    return(
        <div>
        <p>Clique para disparar</p>
        <Button text="Evento" event={meuEvento}/>
        <Button text="Evento 2" event={segundoEvento}/>
        </div>
    )
}

export default Evento