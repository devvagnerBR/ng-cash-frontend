import React from "react";

export const DataBase = React.createContext<null | string | undefined | any>( '' )

const Global = ( { children }: { children: JSX.Element } ) => {

    const data =
        [
            { id: 1, user: "wgrlz", value: 452, tag: "jogo na PSN", date_transaction: 1657854000000, type_transaction: "cash-in" },
            { id: 2, user: "cassiesrx", value: 850, tag: "peça do computador", date_transaction: 1667962800000, type_transaction: "cash-in" },
            { id: 3, user: "paulolps", value: 750, tag: "skate novo", date_transaction: 1668913200000, type_transaction: "cash-out" },
            { id: 4, user: "lucasrod", value: 50, tag: "pizza", date_transaction: 1657162800000, type_transaction: "cash-out" },
            { id: 5, user: "garyxd", value: 252, tag: "tênis novo", date_transaction: 1665630000000, type_transaction: "cash-in" },
            { id: 6, user: "antoniolud", value: 550, tag: "SSD Novo", date_transaction: 1668913200000, type_transaction: "cash-out" },
            { id: 7, user: "jorgemu", value: 990, tag: "Curso online", date_transaction: 1668394800000, type_transaction: "cash-out" }
            // { id: 1, user: "wgrlz", value: 452, tag: "jogo na PSN", date_transaction: 1657854000000, type_transaction: "cash-in" },
            // { id: 2, user: "cassiesrx", value: 850, tag: "peça do computador", date_transaction: 1667962800000, type_transaction: "cash-in" },
            // { id: 3, user: "paulolps", value: 750, tag: "skate novo", date_transaction: 1668913200000, type_transaction: "cash-out" },
            // { id: 4, user: "lucasrod", value: 50, tag: "pizza", date_transaction: 1657162800000, type_transaction: "cash-out" },
            // { id: 5, user: "garyxd", value: 252, tag: "tênis novo", date_transaction: 1665630000000, type_transaction: "cash-in" }
        ]

    const [history, setHistory] = React.useState( data )

    React.useEffect( () => {

    }, [history] )

    return (
        <DataBase.Provider value={{ history, setHistory }}>
            {children}
        </DataBase.Provider>
    )
}

export default Global