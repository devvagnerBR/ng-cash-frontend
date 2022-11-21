import React from 'react'



const PasswordValidate = () => {

    const regexWhiteSpace = /^(?=.*\s)/
    const regexUpperCase = /(?=.*[A-Z])/

    const regexAtLeastNumber = /(?=.*[0-9])/

    const [data, setData] = React.useState<string>( '' )
    const [error, setError] = React.useState<string | null | undefined>( null )


    function validate( password: string ) {

        if ( password.length === 0 ) {
            setError( 'Preencha o campo' )
            return false
        } else if ( regexWhiteSpace.test( password ) ) {
            setError( 'Não é permitido espaço em branco' )
            return false
        } else if ( password?.length < 6 ) {
            setError( 'Senha precisa ter 6 caracteres ou mais' );
            return false
        } else if ( !regexUpperCase.test( password ) ) {
            setError( 'Senha precisa ter um caracter maiúsculo' )
            return false
        } else if ( !regexAtLeastNumber.test( password ) ) {
            setError( 'Senha precisa ter um número' )
            return false
        } else {
            setError( null )
            return true
        }
    }

    const onChange = ( { target }: React.ChangeEvent<HTMLInputElement> ) => {
        if ( error ) validate( target.value )
        setData( target.value )
    }

    return {
        data,
        setData,
        onChange,
        error,
        validate: () => validate( data ),
        onBlur: () => validate( data )
    }



}

export default PasswordValidate    