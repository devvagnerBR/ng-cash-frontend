import React from 'react'

const ValidateInputs = () => {

    const [message, setMessage] = React.useState<string | null>( null )

    const usernameValidate = ( username: string | undefined ) => {

        if ( username ) {

            if ( username.length <= 3 ) {
                setMessage( 'username precisa ter mais que 3 carácteres' );
                return false
            }
            else {
                setMessage( null )
                return true
            }
        }
    }




    return {
        usernameValidate,
        message
    }
}

export default ValidateInputs
