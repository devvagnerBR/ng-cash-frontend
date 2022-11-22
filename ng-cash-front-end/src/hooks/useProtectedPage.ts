import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GO_T0_LOGIN } from '../routes/coordinator';

const useProtectedPage = () => {

    const navigate = useNavigate()
    React.useEffect( () => {
        const token = window.localStorage.getItem( 'token' )
        if ( !token ) GO_T0_LOGIN( navigate )
    }, [navigate] )

}

export default useProtectedPage