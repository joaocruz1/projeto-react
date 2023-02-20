import {useState} from 'react'

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuario com o gmail ${email} foi registrado com a senha ${password}`)
    }

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    return(
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="email">Gmail</label>
                    <input type="email"
                     id="email"
                     name="email"
                     placeholder="Digite seu email"
                     onChange={(e)=>setEmail(e.target.value)}
                     />
                </div>
                <div>
                <label htmlFor="password">Senha</label>
                    <input type="password"
                     id="password" 
                     name="password"
                     placeholder="Digite sua senha"
                     onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" placeholder="Salvar" value="Cadastro"/>
                </div>
            </form>
        </div>
    )
}

export default Form