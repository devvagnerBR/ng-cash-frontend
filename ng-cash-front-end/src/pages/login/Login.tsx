import React from "react"
import { useLocation } from "react-router-dom"
import Input from "../../components/Input/Input"


const Login = () => {

    const initialState = {
        username: '',
        password: ''
    }

    const [values, setValues] = React.useState( initialState )

    
    const handleChanges = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setValues( { ...values, [event.target.name]: event.target.value } )
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
                    <form action="" className="login-form">

                        <Input
                            placeholder={'Neox'}
                            type={'email'}
                            label={'Nome de usuário'}
                            name={'username'}
                            onChange={handleChanges}
                            value={values.username}
                        />

                        <Input

                            placeholder={'****'}
                            type={'password'}
                            label={'Senha'}
                            name={'password'}
                            onChange={handleChanges}
                            value={values.password}
                            password={true}

                        />

                        <section className="btn-entrar-container">
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