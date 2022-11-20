import React from 'react';
import { inputProps } from '../../services/interfaces/IUser';
import eye from '../../assets/icons/eye.png'



const Input = ( { placeholder, error, label, onChange, name, onBlur, password, type = 'text' }: inputProps ) => {

    // const Input = ( { onChange, onBlur, error, name, label, password = false, placeholder, type = 'text', ...props }: inputProps ) => {

    const [showPassword, setShowPassword] = React.useState( false )



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
                <label className='label'
                    htmlFor={name}>
                    {label}
                </label>

                <div className='password-container'>
                    {/* <input className='input-password'
                        placeholder={placeholder}
                        type={showPassword ? 'text' : 'password'}
                        name={name}
                        id={name}
                        onChange={onChange}
                        value={value}
                    /> */}
                    <div className='eye-icon'>
                        <img onClick={() => setShowPassword( !showPassword )} src={eye} alt="icon" />
                    </div>
                </div>
            </div>
        )
    }






}

export default Input