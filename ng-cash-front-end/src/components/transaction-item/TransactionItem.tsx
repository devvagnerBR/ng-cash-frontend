import moneyIcon from '../../assets/icons/moneyIcon.png'


const TransactionItem = ( { item }: any ) => {

    const convertDate = () => {
        const step1 = item.date_transaction
        const step2 = new Date( step1 )
        const result = step2.toLocaleDateString( 'pt-BR' )
        return result // data covnertida para DD/MM/YYYY
    }

    return (
        <div className='item-container-transaction'>


            <section className='icon-transaction'>
                <img src={moneyIcon} alt="" />
            </section>


            <section className='infos-transaction'>
                <h2>Transferência {item.type_transaction === 'cash-in' ? 'recebida de' : 'realizada para'} @{item.user}</h2>
                <h3>{item.tag}</h3>
                <h5>aprovado</h5>
            </section>


            <section className='values-transaction'>
                <h2>{convertDate()}</h2>
                <h3 style={item.type_transaction === 'cash-in' ? { color: ' green' } : { color: 'red' }}>{item?.value.toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } )}</h3>
            </section>


        </div >
    )
}

export default TransactionItem

// realizada pra
// recebida de