import { createContext, useEffect, useState } from 'react'

export const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {

    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    })

    const fatchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Zr69HcUpCU9kUxDMKiHDRdHL'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
    }
        useEffect(()=>{
            fatchAllCoin();
        },[currency])

    const contextvalue = {
        allCoin, currency, setCurrency
    }

    return (
        <CoinContext.Provider value={contextvalue}>
            {children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;