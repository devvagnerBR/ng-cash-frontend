import React from 'react'
import eyeBalance from '../../assets/icons/eyeBalance.png'
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

                </section>

                <section className='card-preview-homepage'>

                </section>
            </aside>





            <main className='main-content-homepage'>

            </main>
        </div>
    )
}

export default Homepage