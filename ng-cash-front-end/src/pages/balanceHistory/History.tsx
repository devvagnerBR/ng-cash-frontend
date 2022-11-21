import React from 'react'
import arrowDown from '../../assets/icons/arrowdown.png'
const History = () => {




    return (
        <div className='history-container animeLeft'>
            <nav className='filter-history '>
                <section className='nav-filter-history'>
                    <nav className='filters-history'>
                        <h3>filtros:</h3>

                        <select name="gastos" id="gastos">
                            <option disabled value="">filtrar historico</option>
                            <option value="">todos</option>
                            <option value="">recebido</option>
                            <option value="">transferido</option>
                        </select>
                        <select name="periodo" id="periodo">
                            <option disabled value="">filtrar periodo</option>
                            <option value="">set</option>
                            <option value="">out</option>
                            <option value="">nov</option>
                        </select>
                    </nav>
                </section>
                <section className='nav-title-history'>
                    <h1>histórico de transações</h1>
                    <img src={arrowDown} alt="" />
                </section>
            </nav>
        </div>
    )
}

export default History