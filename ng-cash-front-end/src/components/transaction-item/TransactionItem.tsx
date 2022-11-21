import React from 'react'
import moneyIcon from '../../assets/icons/moneyIcon.png'
const TransactionItem = () => {
    return (
        <div className='item-container-transaction'>
            <section className='icon-transaction'>
                <img src={moneyIcon} alt="" />
            </section>
            <section className='infos-transaction'>
                <h2>Transferência realizada pra @Neox</h2>
                <h3>dinheiro do drone</h3>
                <h5>aprovado</h5>
            </section>
            <section className='values-transaction'>
                <h2>20 Ago</h2>
                <h3>- R$ 570,00</h3>
            </section>

        </div>
    )
}

export default TransactionItem