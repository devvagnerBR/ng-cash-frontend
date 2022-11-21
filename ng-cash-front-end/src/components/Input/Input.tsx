import React from 'react';
import { inputProps } from '../../services/interfaces/IUser';
import eye from '../../assets/icons/eye.png'



const Input = ( { color, placeholder, error, label, onChange, name, onBlur, password, type = 'text' }: inputProps ) => {

    const [showPassword, setShowPassword] = React.useState( false )


    if ( !password ) {

        return (

            <div className='input animeLeft'>
                <label id={color} className='label'
                    htmlFor={name}>
                    {label}
                </label>

                <input
                    className={color}
                    id={name}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                <p>{error}</p>
            </div>

        )
    } else {
        return (

            <div className='input'>
                <label className={`${'label'} ${color}`}
                    htmlFor={name}>
                    {label}
                </label>

                <div className='password-container'>
                    <input
                        className={`${'input-password'} ${color}`}

                        id={name}
                        placeholder={placeholder}
                        name={name}
                        type={showPassword ? 'text' : 'password'}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                    <div className='eye-icon'>
                        <img onClick={() => setShowPassword( !showPassword )} src={eye} alt="icon" />
                    </div>
                </div>
                <p>{error}</p>
            </div>
        )
    }






}

export default Input