import React from 'react'
import arrowDown from '../../assets/icons/arrowdown.png'
import Input from '../../components/Input/Input'
import transaction from '../../assets/fazopix.png'
const Transactions = () => {

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
                        name="username"
                        color='white'
                    />
                    <Input
                        placeholder="@Neox"
                        label='Para quem você vai transferir?'
                        type="text"
                        name="username"
                        color='white'
                    />
                    <Input
                        placeholder="@Neox"
                        label='Nome de usuário'
                        type="text"
                        name="username"
                        color='white'
                    />

                    <div className='confirm-transaction'>
                        <p>Realizar a transferência no valor de: <span>R$ 157,25</span> para o <span>@wgrlz</span>?</p>
                    </div>
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