import React from 'react'
import arrowDown from '../../assets/icons/arrowdown.png'
import Input from '../../components/Input/Input'
import transaction from '../../assets/fazopix.png'
import { GO_TO_HOMEPAGE } from './../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import { DataBase } from '../../context/GlobalContext';


const Transactions = () => {

    const { history, setHistory } = React.useContext( DataBase )

    //console.log( 'KKKKKKKKKKKKK', history );
    const navigate = useNavigate()

    const inputs = {
        valueCashOut: '',
        userCashOut: '',
        titleTransaction: ''
    }

    const [message, setMessage] = React.useState<string | null | undefined>( null )
    const [values, setValues] = React.useState( inputs )
    const [showConfirm, setShowConfirm] = React.useState( false )
    const hoje = 1657854000000
    const step2 = new Date( hoje )
    const result = step2.toLocaleDateString( 'pt-BR' )
    // console.log( result );

    //console.log( Date.now() )

    //console.log( { id: uuidv4(), user: values.userCashOut, value: values.valueCashOut, tag: values.titleTransaction, date_transaction: Date.now(), type_transaction: "cash-out" } )






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


        if ( values.userCashOut && values.valueCashOut && newBalance >= 0 ) {

            const newTransaction = {
                id: uuidv4(),
                user: values.userCashOut,
                value: Number(values.valueCashOut),
                tag: values.titleTransaction,
                date_transaction: Date.now(),
                type_transaction: "cash-out"
            }

            const copyHistory = [newTransaction, ...history]
            setHistory( copyHistory );

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

                    {showConfirm && newBalance >= 0 ?

                        <div className='confirm-transaction animeLeft'>
                            <p>Realizar a transferência no valor de: <span>R$ {values.valueCashOut}</span> para o <span>{values.userCashOut}</span>?</p>
                            <Input
                                placeholder="dinheiro da pizza"
                                label='Titulo da transferência'
                                type="text"
                                name="titleTransaction"
                                color='white'
                                onChange={handleChanges}
                                value={values.titleTransaction}
                            />
                        </div> :
                        <p id='message-balance'>{message}</p>}

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