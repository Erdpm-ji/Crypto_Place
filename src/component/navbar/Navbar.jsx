import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);

  const CurrencyHandler = (event) => {
    switch(event.target.value){
      case "usd" : {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr" : {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  }

  return (
    <div className='nabvar'>
      <Link to={'/'}>
        <img src={logo} alt="" className='logo'/>
        </Link>
        <ul>
           <Link to={'/'}><li>Home</li></Link>
            <li>Feature</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={CurrencyHandler} >
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign up <img src="" alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar