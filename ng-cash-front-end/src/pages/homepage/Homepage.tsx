import React from 'react'
import eyeBalance from '../../assets/icons/eyeBalance.png'
import nglogo from '../../assets/nglogo.png'
import logout from '../../assets/icons/logout.png'
const Homepage = () => {

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
                            <h3>R$ 254,88</h3>
                            <img src={eyeBalance} alt="show balance" />
                        </div>
                    </main>
                    <nav className='wallet-buttons'>
                        <button className='btn' >transferir</button>
                        <button className='btn' >atividade</button>
                    </nav>
                </section>

                <section className='card-preview-homepage'>

                    <main className='card-homepage'>
                        <img src={nglogo} alt="" />

                        <h1>WAGNER GUIMARAES</h1>
                        <h1 id='number-card-homepage'>0000 0000 0000 0000</h1>
                    </main>
                    <p>modalidade: <span>DÉBITO</span> </p>

                </section>
                <section className='logout-homepage'>
                    <div className='icon-logout'>
                        <img src={logout} alt="" />
                        <a href="">SAIR</a>
                    </div>
                </section>
            </aside>

            <main className='main-content-homepage'>

            </main>
        </div>
    )
}

export default Homepage