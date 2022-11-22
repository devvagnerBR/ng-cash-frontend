import React from 'react'
import eyeBalance from '../../assets/icons/eyeBalance.png'
import nglogo from '../../assets/nglogo.png'
import logout from '../../assets/icons/logout.png'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import History from '../balanceHistory/History'
import Transactions from '../transactions/Transactions'

const Homepage = () => {

    const [stateBalance, setStateBalance] = React.useState( '' )
    const username = window.localStorage.getItem( 'username' )
    const { pathname } = useLocation()
    const balance = JSON.parse( `${window.localStorage.getItem( 'balance' )}` )

    React.useEffect( () => {
        const step1 = JSON.parse( `${window.localStorage.getItem( 'balance' )}` )
        setStateBalance(step1)
    }, [pathname] )


    return (
        <div className='container-size grid-homepage'>



            <aside className='wallet-container-homepage'>
                <header className='title-homepage'>
                    <h1>carteira</h1>
                </header>
                <section className='wallet-balance-homepage'>
                    <main className='balance-homepage'>
                        <h4>saldo disponível</h4>
                        <div className='money-homepage'>
                            <h3>{balance.toLocaleString( 'pt-BR', { style: 'currency', currency: 'BRL' } )}</h3>
                            <img src={eyeBalance} alt="show balance" />
                        </div>
                    </main>
                    <nav className='wallet-buttons'>
                        <NavLink to="transferencia" className='navlink' >transferir</NavLink>
                        <NavLink to='/conta' className='navlink' >atividade</NavLink>
                    </nav>
                </section>

                <section className='card-preview-homepage'>

                    <main className='card-homepage'>
                        <img src={nglogo} alt="" />

                        <h1>{username}</h1>
                        <h1 id='number-card-homepage'>5469 9707 0795 8552</h1>
                    </main>
                    <p>MODALIDADE: <span>DÉBITO</span> </p>

                </section>
                <section className='logout-homepage'>
                    <div className='icon-logout'>
                        <img src={logout} alt="" />
                        <a href="">SAIR</a>
                    </div>
                </section>
            </aside>

            <main className='main-content-homepage'>

                <header className='header-homepage'>
                    <img src={nglogo} alt="" />
                    <h2> <span>@</span>{username}</h2>
                </header>

                <Routes>
                    <Route path='/' element={<History />} />
                    <Route path='transferencia' element={<Transactions />} />
                </Routes>


            </main>
        </div>
    )
}

export default Homepage