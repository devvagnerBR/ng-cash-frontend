import React from 'react';
import { INPUT_PROPS } from '../../services/interfaces/IUser';
import eye from '../../assets/icons/eye.png'

const Input = ( { onChange, name, label, password = false, placeholder, value, type = 'text' }: INPUT_PROPS ) => {

    const [showPassword, setShowPassword] = React.useState( false )

    if ( !password ) {

        return (

            <div className='input'>
                <label className='label'
                    htmlFor={name}>
                    {label}
                </label>

                <input
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    id={name}
                    onChange={onChange}
                    value={value}
                />
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