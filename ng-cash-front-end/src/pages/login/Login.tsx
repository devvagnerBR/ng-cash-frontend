import React from "react"
import Input from "../../components/Input/Input"
import UsernameValidate from './../../hooks/usernameValidate';


const Login = () => {

    // const initialState = {
    //     username: '',
    //     password: ''
    // }

    const username = UsernameValidate()
    // const password = UsernameValidate()

    // const handleChanges = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    //     setValues( { ...values, [event.target.name]: event.target.value } )
    // }


    // const handleSubmit = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    //     event.preventDefault()

    // }





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
                            placeholder="@Neox"
                            label='Nome de usuário'
                            type="text"
                            name="username"
                            password={false}
                            {...username}
                        // placeholder={'Neox'}
                        // type={'text'}
                        // label={'Nome de usuário'}
                        // name={'username'}
                        // required
                        // password={true}
                        // // onChange={onChange}
                        // {...username}

                        />

                        {/* <Input

                            placeholder={'sua senha'}
                            type={'password'}
                            label={'Senha'}
                            name={'password'}
                            // onChange={handleChanges}
                            // value={values.password}
                            password={true}
                            required


                        /> */}
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