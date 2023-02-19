function Pessoa({name, idade, profile, photo}){
    return(
        <div>
            <h2>Nome:{name}</h2>
            <img src={photo} alt={name}/>
            <p>Idade:{idade}</p>
            <p>Profissão:{profile}</p>
        </div>
    )
}

export default Pessoa