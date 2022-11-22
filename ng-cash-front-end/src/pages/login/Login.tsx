import React from "react"
import { useNavigate } from "react-router-dom"
import Input from "../../components/Input/Input"
import Loading from "../../components/loading/Loading"
import PasswordValidate from "../../hooks/validadePassword"
import UsernameValidate from "../../hooks/validateUsername"
import { v4 as uuidv4 } from 'uuid'

import { GO_T0_SIGNUP, GO_TO_HOMEPAGE } from './../../routes/coordinator';



const Login = () => {

    const [showLoading, setShowLoading] = React.useState( false )
    const [errorMessage, setErrorMessage] = React.useState<string | null>( null )

    const username = UsernameValidate()
    const password = PasswordValidate()
    const navigate = useNavigate()


    const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
        const usernameLS = window.localStorage.getItem( 'username' )
        const passwordLS = window.localStorage.getItem( 'password' )
        event.preventDefault()

        if ( username.data !== usernameLS || password.data !== passwordLS ) {
            setErrorMessage( `usuario ou senha incorretos` );

        } else if ( username.data === usernameLS && password.data === passwordLS ) {
            window.localStorage.setItem( 'username', username.data ) //username
            window.localStorage.setItem( 'password', password.data ) // password
            const token = uuidv4()
            window.localStorage.setItem( 'token', token )
            const balanceGenerator = Math.floor( Math.random() * 200 ) + 100
            window.localStorage.setItem( 'balance', JSON.stringify( balanceGenerator ) )
            setShowLoading( true )
            setTimeout( () => {
                GO_TO_HOMEPAGE( navigate )
            }, 2000 )
        }
    }

    React.useEffect( () => {
        setErrorMessage( null )
    }, [username.data, password.data] )

    if ( showLoading ) {
        return (
            <Loading />
        )
    } else {
        return (

            <div className="container-size grid-login-signup" >


                <section className="banner-side" >


                </section>

                <section className="form-side">
                    <header className="form-header" />
                    <section className="grid-login ">
                        <section className="login-title animeLeft">
                            <h1>Login</h1>
                            <p>Bem vind <span>x</span>de volta</p>
                        </section>
                        <form onSubmit={handleSubmit} className="login-form animeLeft">

                            <Input
                                placeholder="@Neox"
                                label='Nome de usuário'
                                type="text"
                                name="username"
                                {...username}
                            />
                            <Input
                                placeholder="sua senha aqui"
                                label='Senha'
                                type="password"
                                name="password"
                                password={true}
                                {...password}
                            />
                            <p id="errorMessage-login">{errorMessage}</p>
                            {<section className="btn-login-container">
                                <p>ainda não tem uma conta? <span onClick={() => GO_T0_SIGNUP( navigate )}>criar agora!</span></p>
                                <button className="btn">entrar</button>
                            </section>}

                        </form>
                    </section>
                </section>

            </div >

        )
    }

}

export default Login