import React from 'react'
import { useRef } from 'react';
import { useState,useEffect } from 'react'

export default function Text3() {
    const effectCalled = useRef(false);
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([])
    useEffect(() => {
        if(!effectCalled.current){
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then(response =>response.json())
        .then((data) => {
            console.log(data)
            setCoins(data)
            setLoading(false)
        }).then(effectCalled.current = true)};
    }, [])
    return (
        <div>
            <h1>The Coins ({coins.length})</h1>
            {loading ? <strong></strong>: null}
            <ul>
                {coins.map((coin) => <li>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD </li> )}
            </ul>
        </div>
    );
}
