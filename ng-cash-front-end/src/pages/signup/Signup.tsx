import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import PasswordValidate from "../../hooks/PasswordValidate";
import UsernameValidate from "../../hooks/UsernameValidate";
import { GO_T0_LOGIN } from "./../../routes/coordinator";

const Signup = () => {
    const username = UsernameValidate();
    const password = PasswordValidate();
    const passwordConfirm = PasswordValidate();
    const navigate = useNavigate();
    const [showInputPassword, setShowInputPassword] = React.useState( false );

    const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        if ( username.validate() && password.validate() ) {
            return window.alert( "FOI, AMEM" );
        }
    };

    React.useEffect( () => {
        if ( username.validate() ) {
            setTimeout( () => {
                setShowInputPassword( true );
            }, 1800 );
        }
    }, [username.data] );

    return (
        <div className="container-size grid-login-signup">
            <section className="banner-side"></section>

            <section className="form-side-signup">
                <section className="grid-signup">
                    <section className="signup-title animeLeft">
                        <h1>Criar Conta</h1>
                        <p>
                            Bem vind <span>x</span> a familia NG.CASH
                        </p>
                    </section>
                    <form onSubmit={handleSubmit} className="signup-form">
                        <Input
                            placeholder="@Neox"
                            label="Nome de usuário"
                            type="text"
                            name="username"
                            {...username}
                        />

                        <section className="welcome">
                            {showInputPassword ? (
                                <div className="delay-container animeLeft">
                                    <h1>E ai, {username.data}</h1>
                                    <h2>
                                        Crie uma senha para proteger sua conta Ela precisa ter{" "}
                                        <span>
                                            {" "}
                                            8 caracteres ou mais e ao menos um número e uma letra
                                            maiúscula.
                                        </span>
                                    </h2>
                                    <Input
                                        placeholder="@Neox"
                                        label="Sua senha"
                                        type="password"
                                        name="password"
                                        password={true}
                                        {...password}
                                    />
                                    <Input
                                        placeholder="@Neox"
                                        label="Sua senha"
                                        type="password"
                                        name="password"
                                        password={true}
                                        {...passwordConfirm}
                                    />
                                </div>
                            ) : null}
                        </section>

                        <section className="btn-login-container">
                            <p>
                                já tem uma conta?{" "}
                                <span onClick={() => GO_T0_LOGIN( navigate )}>entrar!</span>
                            </p>
                            <button className="btn">criar conta</button>
                        </section>
                    </form>
                </section>
            </section>
        </div>
    );
};

export default Signup;
