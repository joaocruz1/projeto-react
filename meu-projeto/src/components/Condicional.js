import { useState } from "react"

function Condicional(){

    const [email,setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }
    function limparEmail(e){
        e.preventDefault()
        setUserEmail('')
        console.log(userEmail)
    }
    return(
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input type="email" placeholder="Digite o seu email..." onChange={(e)=>setEmail(e.target.value)}/>
                <button onClick={enviarEmail}>Enviar Email</button>
                {userEmail &&(
                    <div>
                        <p>Seu email é:{userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Condicional