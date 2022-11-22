import React from 'react'
import arrowDown from '../../assets/icons/arrowdown.png'
import TransactionItem from '../../components/transaction-item/TransactionItem'
import { DataBase } from '../../context/GlobalContext';
import useProtectedPage from '../../hooks/useProtectedPage';
import { historyProps } from './../../services/interfaces/IHistory';

const History = () => {

    useProtectedPage()

    const [selectType, setSelectType] = React.useState( '' )
    const { history } = React.useContext( DataBase )


    const filteredTransactions = history && history.filter( ( x: any ) => {
        return x.type_transaction.includes( selectType )
    } )

    const render_history = filteredTransactions?.map( ( item: historyProps, index: string ) => {
        return (
            <TransactionItem item={item} key={index} />
        )
    } )

    return (
        <div className='history-container animeLeft'>
            <nav className='filter-history '>
                <section className='nav-filter-history'>
                    <nav className='filters-history'>
                        <h3 >filtros:</h3>
                        <select onClick={( e: any ) => setSelectType( e.target.value )} name="gastos" id="gastos">
                            <option disabled value="">filtrar historico</option>
                            <option value="">todos</option>
                            <option value="cash-in">recebido</option>
                            <option value="cash-out">transferido</option>
                        </select>
                    </nav>
                </section>
                <section className='nav-title-history'>
                    <h1>histórico de transações</h1>
                    <img src={arrowDown} alt="" />
                </section>
            </nav>
            <main className='transactions-history'>
                {render_history}
            </main>

        </div>
    )
}

export default History