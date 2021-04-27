import React from 'react'
import {Link} from 'react-router-dom'

const Stocks = () => {

    const stocks = [
        {name: "Apple Inc.", symbol: "AAPL"},
        {name: "Microsoft Corporation", symbol: "MSFT"},
        {name: "Alphabet Inc.", symbol: "GOOGL"},
        {name: "Facebook, Inc.", symbol: "FB"},
        {name: "Oracle Corporation", symbol: "ORCL"},
    ]
// THE INTEL STOCK WAS NOT SHOWING UP IN THE API, SO I HAD TO DELETE IT
    const stocklist = stocks.map((item) => {
        const stockName = item.name
        const stockSymbol = item.symbol

        return (
            <Link to={`/company/${stockSymbol}`}>
                <h2>{stockName}</h2>
            </Link>
        )
    })

    return (
        <div className="stocklist">
            {stocklist}
        </div>
    )

}

export default Stocks