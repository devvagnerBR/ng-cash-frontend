

// const ValidateInputs = () => {

//     const [message, setMessage] = React.useState<string | null>( null )

//     const usernameValidate = ( username: string | undefined ) => {

//         const regexWhiteSpace = /^(?=.*\s)/
//         const regexUpperCase = /(?=.*[A-Z])/
//         const regexAtLeast3 = /[a-zA-Z0-9]{2,} /
//         const regexAtLeastNumber = /(?=.*[0-9])/


//         if ( username ) {
//             console.log( username.length );

//             try {

//                 if ( username.length < 3 ) {
//                     setMessage( 'Precisa ter mais que 3' )
//                     return
//                 }
//                 if ( regexWhiteSpace.test( username ) ) {
//                     setMessage( 'Não pode ter espaço' )
//                     return
//                 }

//                 setMessage( null )
//             } catch ( error ) {
//                 console.log( error );

//             }

//         } else {
//             setMessage( 'Campo está vazio' )
//         }
//     }




//     return {
//         usernameValidate,
//         message
//     }
// }

// export default ValidateInputs
