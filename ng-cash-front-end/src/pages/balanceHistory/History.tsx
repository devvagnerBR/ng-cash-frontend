import React, { SelectHTMLAttributes } from 'react'
import arrowDown from '../../assets/icons/arrowdown.png'
import TransactionItem from '../../components/transaction-item/TransactionItem'
import { GET_HISTORY } from '../../services/api/Requests'
import { historyProps } from './../../services/interfaces/IHistory';

const History = () => {

    const [selectType, setSelectType] = React.useState( '' )
    const [selectMonth, setSelectMonth] = React.useState( Number( '' ) )

    const history =
        [
            { id: 1, user: "wgrlz", value: 452, tag: "jogo na PSN", date_transaction: 1657854000000, type_transaction: "cash-in" },
            { id: 2, user: "cassiesrx", value: 850, tag: "peça do computador", date_transaction: 1667962800000, type_transaction: "cash-in" },
            { id: 3, user: "paulolps", value: 750, tag: "skate novo", date_transaction: 1668913200000, type_transaction: "cash-out" },
            { id: 4, user: "lucasrod", value: 50, tag: "pizza", date_transaction: 1657162800000, type_transaction: "cash-out" },
            { id: 5, user: "garyxd", value: 252, tag: "tênis novo", date_transaction: 1665630000000, type_transaction: "cash-in" },
            { id: 6, user: "antoniolud", value: 550, tag: "SSD Novo", date_transaction: 1668913200000, type_transaction: "cash-out" },
            { id: 7, user: "jorgemu", value: 990, tag: "Curso online", date_transaction: 1668394800000, type_transaction: "cash-out" },
            { id: 1, user: "wgrlz", value: 452, tag: "jogo na PSN", date_transaction: 1657854000000, type_transaction: "cash-in" },
            { id: 2, user: "cassiesrx", value: 850, tag: "peça do computador", date_transaction: 1667962800000, type_transaction: "cash-in" },
            { id: 3, user: "paulolps", value: 750, tag: "skate novo", date_transaction: 1668913200000, type_transaction: "cash-out" },
            { id: 4, user: "lucasrod", value: 50, tag: "pizza", date_transaction: 1657162800000, type_transaction: "cash-out" },
            { id: 5, user: "garyxd", value: 252, tag: "tênis novo", date_transaction: 1665630000000, type_transaction: "cash-in" }
        ]

    const filteredTransactions = history && history.filter( ( x ) => {
        // const datacertinha = new Date( x.date_transaction ).getMonth() 

        const datacertinha = new Date( x.date_transaction )

        // console.log( new Date( x.date_transaction ) );


        //console.log( datacertinha );

        //console.log( x.date_transaction );

        // return 
        return x.type_transaction.includes( selectType )
    } )

    const render_history = filteredTransactions?.map( ( item: historyProps, index ) => {
        return (
            <TransactionItem item={item} key={index} />
        )
    } )








    console.log( selectMonth );




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
                        <select onClick={( e: any ) => setSelectMonth( e.target.value )} name="periodo" id="periodo">
                            <option disabled value="">filtrar periodo</option>
                            <option value="5">Maio</option>
                            <option value="6">Junho</option>
                            <option value="7">Julho</option>
                            <option value="8">Agosto</option>
                            <option value="9">Setembro</option>
                            <option value="10">Novembro</option>

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