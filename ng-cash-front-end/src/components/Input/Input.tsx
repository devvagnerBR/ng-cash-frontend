import React from 'react';
import { INPUT_PROPS } from '../../services/interfaces/IUser';
import eye from '../../assets/icons/eye.png'
import ValidateInputs from '../../hooks/useValidation';


const Input = ( { onChange, onBlur, name, label, password = false, placeholder, value, type = 'text' }: INPUT_PROPS ) => {

    const [showPassword, setShowPassword] = React.useState( false )

    const { usernameValidate, message } = ValidateInputs()

    // React.useEffect( () => {

    //     if ( !usernameValidate( value ) ) {
    //         console.log( message );
    //     } else console.log( 'username ok' );

    // }, [usernameValidate] )








    if ( !password ) {

        return (

            <div className='input'>
                <label className='label'
                    htmlFor={name}>
                    {label}
                </label>

                <input
                    onBlur={() => usernameValidate( onBlur )}
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    id={name}
                    onChange={onChange}
                    value={value}
                />
                <p>{message}</p>
            </div>

        )
    } else {
        return (

            <div className='input'>
                <label className='label'
                    htmlFor={name}>
                    {label}
                </label>

                <div className='password-container'>
                    <input className='input-password'
                        placeholder={placeholder}
                        type={showPassword ? 'text' : 'password'}
                        name={name}
                        id={name}
                        onChange={onChange}
                        value={value}
                    />
                    <div className='eye-icon'>
                        <img onClick={() => setShowPassword( !showPassword )} src={eye} alt="icon" />
                    </div>
                </div>
            </div>
        )
    }






}

export default Input