import React from "react";
import { BASE_URL } from "./URL";
import { HEADERS } from "./URL";


export const GET_HISTORY = () => {
    const [history, setHistory] = React.useState( [] )

    const REQUEST_HISTORY = () => {
        BASE_URL.get( '/history', HEADERS )
            .then( ( res ) => {
                console.log(res.data);
                
                setHistory( res.data )
            }
            ).catch( ( err ) => {
                console.log( err.response.data );
            } )

    }

    return { history, setHistory, REQUEST_HISTORY }
}
