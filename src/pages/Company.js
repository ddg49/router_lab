import React, {useState, useEffect} from 'react'

const Company = (props) => {
    
    const apiKey = "5651a84073c7d5cf684ce5f44e51aff0"
    const symbol = props.match.params.symbol
    
    const [stock, setStock] = useState({
        name: "",
        price: "",
        industry: "",
        desc: ""
    })

    const getData = async () => {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`)
        const data = await response.json()
        setStock({
            name: data[0].companyName,
            price: data[0].price,
            industry: data[0].industry,
            desc: data[0].description
        })
    }

    useEffect(() => {getData()}, []);

    return (
    <div className="stockCard">
      <h1>{stock.name}</h1>
      <h3>Price: ${stock.price}</h3>
      <h4>Industry: {stock.industry}</h4>
      <p>{stock.desc}</p>
    </div>
    )

    
}

export default Company