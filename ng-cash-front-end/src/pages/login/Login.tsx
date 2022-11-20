import React from "react"
import { useNavigate } from "react-router-dom"
import Input from "../../components/Input/Input"
import Loading from "../../components/loading/Loading"
import PasswordValidate from "../../hooks/PasswordValidate"
import UsernameValidate from "../../hooks/UsernameValidate"
import { GO_T0_SIGNUP, GO_TO_HOMEPAGE } from './../../routes/coordinator';



const Login = () => {

    const [showLoading, setShowLoading] = React.useState( false )

    const username = UsernameValidate()
    const password = PasswordValidate()
    const navigate = useNavigate()

    const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()

        if ( username.validate() && password.validate() ) {
            setShowLoading( true )
            setTimeout( () => {
                GO_TO_HOMEPAGE( navigate )
            }, 2000 )

        }
    }

    //


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
                                placeholder="@Neox"
                                label='Sua senha'
                                type="password"
                                name="password"
                                password={true}
                                {...password}
                            />

                            <section className="btn-login-container">
                                <p>ainda não tem uma conta? <span onClick={() => GO_T0_SIGNUP( navigate )}>criar agora!</span></p>
                                <button className="btn">entrar</button>
                            </section>

                        </form>
                    </section>
                </section>

            </div >

        )
    }

}

export default Login