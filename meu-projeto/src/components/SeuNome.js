function SeuNome({setNome}){

    return(
        <div>
            <p>Digiite o seu nome</p>
            <input type="text" placeholder="digite seu nome"
            onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}

export default SeuNome