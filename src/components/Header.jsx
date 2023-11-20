import React from 'react'
import { Link } from 'react-router-dom'
import Welcome from './Welcome'

const Header = () => {
  return (
    <div className='navbar'>
        <Link className='navbar-title' to='/'>Writealy</Link>
        <Link className='navbar-section' to='/product'> Product - </Link>
        <Link className='navbar-section navbar-elements' to='/UseCases'> Use Cases - </Link>
        <Link className='navbar-section navbar-elements' to='/pricing'> Pricing </Link>
        <Link className='navbar-section navbar-elements' to='/pricing'> Customers </Link>
        <Link className='navbar-section navbar-elements' to='/pricing'> Resources - </Link>
        <button className='signin-btn'>Sign in</button>
        <Welcome />
    </div>
  )
}

export default Header
