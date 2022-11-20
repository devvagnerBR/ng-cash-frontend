import { validateHeaderName } from 'http'
import React from 'react'

const UsernameValidate = () => {

    const regexWhiteSpace = /^(?=.*\s)/
    const regexUpperCase = /(?=.*[A-Z])/
    const regexAtLeast3 = /[a-zA-Z0-9]{2,} /
    const regexAtLeastNumber = /(?=.*[0-9])/

    const [data, setData] = React.useState( '' )
    const [error, setError] = React.useState<string | undefined | null>( null )

    function validate( username: string | undefined ) {

        if ( username ) {
            console.log( username.length );

            try {

                if ( username.length < 3 ) {
                    setError( 'Precisa ter mais que 3' )
                    return
                }
                if ( regexWhiteSpace.test( username ) ) {
                    setError( 'Não pode ter espaço' )
                    return
                }

                setError( null )
            } catch ( error ) {
                console.log( error );

            }

        } else {
            setError( 'Campo está vazio' )
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