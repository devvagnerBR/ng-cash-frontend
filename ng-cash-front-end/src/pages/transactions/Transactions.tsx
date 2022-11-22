import React from 'react'
import arrowDown from '../../assets/icons/arrowdown.png'
import Input from '../../components/Input/Input'
import transaction from '../../assets/fazopix.png'
const Transactions = () => {


    const inputs = {
        valueCashOut: '',
        userCashOut: '',

    }

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




    return (
        <div className='container-transactions animeLeft'>
            <header className='header-transactions'>
                <h1>realizar transferência</h1>
                <img src={arrowDown} alt="" />
            </header>

            <main className='form-container-transaction'>
                <form className='form-container' action="">
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

                    {showConfirm ? <div className='confirm-transaction animeLeft'>
                        <p>Realizar a transferência no valor de: <span>R$ {values.valueCashOut}</span> para o <span>@wgrlz</span>?</p>
                    </div> : null}
                    <button className='btn'>transferir</button>
                </form>

                <aside className='banner-transaction'>
                    <img src={transaction} alt="" />
                </aside>
            </main>
        </div>
    )
}

export default Transactions