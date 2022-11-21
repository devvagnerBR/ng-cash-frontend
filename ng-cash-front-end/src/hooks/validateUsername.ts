import React from 'react'



const UsernameValidate = () => {

    const regexWhiteSpace = /^(?=.*\s)/
    const regexSpecialCharacter = /[^a-zA-Z0-9]+/g
    const [data, setData] = React.useState<string>( '' )
    const [error, setError] = React.useState<string | null | undefined>( null )


    function validate( username: string ) {

        if ( username.length === 0 ) {
            setError( 'Preencha o campo' )
            return false
        } else if ( username?.length < 3 ) {
            setError( 'Usuario precisa ter 3 caracteres ou mais' );
            return false
        } else if ( regexWhiteSpace.test( username ) ) {
            setError( 'Não é permitido espaço em branco' )
            return false
        } else if ( regexSpecialCharacter.test( username ) ) {
            setError( 'Não é permitido caracteres especiais' )
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

export default UsernameValidate