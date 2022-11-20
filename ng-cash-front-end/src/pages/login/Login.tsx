import React from "react"
import Input from "../../components/Input/Input"
import PasswordValidate from "../../hooks/PasswordValidate"
import UsernameValidate from "../../hooks/UsernameValidate"



const Login = () => {

    const username = UsernameValidate()
    const password = PasswordValidate()


    const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()

        if ( username.validate() && password.validate() ) {
            window.alert( 'FOI, AMEM' )
        }
    }



    return (
        <div className="container-size grid-login-signup">

            <section className="banner-side">

            </section>

            <section className="form-side">
                <header className="form-header" />
                <section className="grid-login">
                    <section className="login-title">
                        <h1>Login</h1>
                        <p>Bem vind <span>x</span>de volta</p>
                    </section>
                    <form onSubmit={handleSubmit} className="login-form">

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
                            <p>ainda não tem uma conta? <span>criar agora!</span></p>
                            <button className="btn">entrar</button>
                        </section>

                    </form>
                </section>
            </section>

        </div>
    )
}

export default Login