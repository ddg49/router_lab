import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <section className="nav">
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/about'>
                <div>About</div>
            </Link>
            <Link to='/stocks'>
                <div>Stocks</div>
            </Link>
        </section>
    )
}

export default NavBar