import React from 'react'
import arrowDown from '../../assets/icons/arrowdown.png'
import Input from '../../components/Input/Input'
import transaction from '../../assets/fazopix.png'
import Loading from '../../components/loading/Loading'
import { GO_TO_HOMEPAGE } from './../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
const Transactions = () => {

    const navigate = useNavigate()
    const inputs = {
        valueCashOut: '',
        userCashOut: '',
    }




    const [message, setMessage] = React.useState<string | null | undefined>( null )
    const [values, setValues] = React.useState( inputs )
    const [showConfirm, setShowConfirm] = React.useState( false )

    const handleChanges = ( event: React.ChangeEvent<HTMLInputElement> ) => {

        setValues( { ...values, [event.target.name]: event.target.value } )
    }

    if ( values.userCashOut && values.valueCashOut ) {
        setTimeout( () => {
            setShowConfirm( true )
        }, 1500 )
    } 

    const balance = JSON.parse( `${window.localStorage.getItem( 'balance' )}` )


    const balanceNumber = Number( balance )
    const estado = Number( values.valueCashOut )

    const newBalance = ( balanceNumber - estado );



    const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()


        if ( values.userCashOut && values.valueCashOut && newBalance > 0 ) {
            window.localStorage.setItem( 'balance', JSON.stringify( newBalance ) )
            GO_TO_HOMEPAGE( navigate )
        }
    }

    React.useEffect( () => {
        JSON.parse( `${window.localStorage.getItem( 'balance' )}` )
    }, [handleSubmit] )


    return (
        <div className='container-transactions animeLeft'>
            <header className='header-transactions'>
                <h1>realizar transferência</h1>
                <img src={arrowDown} alt="" />
            </header>

            <main className='form-container-transaction'>
                <form onSubmit={handleSubmit} className='form-container' action="">
                    <Input
                        placeholder="0,00"
                        label='Qual o valor você deseja transferir?'
                        type="number"
                        name="valueCashOut"
                        color='white'
                        onChange={handleChanges}
                        value={values.valueCashOut}
                    />
                    <Input
                        placeholder="@Neox"
                        label='Para quem você vai transferir?'
                        type="text"
                        name="userCashOut"
                        color='white'
                        onChange={handleChanges}
                        value={values.userCashOut}
                    />

                    {showConfirm && newBalance >= 0 ? <div className='confirm-transaction animeLeft'>
                        <p>Realizar a transferência no valor de: <span>R$ {values.valueCashOut}</span> para o <span>{values.userCashOut}</span>?</p>
                    </div> : <p id='message-balance'>{message}</p>}
                    {newBalance < 0 ? <button disabled className='btn'>transferir</button> : <button className='btn'>transferir</button>}

                </form>

                <aside className='banner-transaction'>
                    <img src={transaction} alt="" />
                </aside>
            </main>
        </div>
    )
}

export default Transactions