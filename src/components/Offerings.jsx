import React from 'react'
import payoff from '../assets/img/payoff-icon.svg.png'

const Offerings = () => {
  return (
    <div className='offering-container'>
        <div><img src={payoff} alt='' className='payoff'/></div>
      <div className='offering-title'><b>writealy</b></div>

      <p className='offering-heading'>The only brainstorming solution <br/>that lives up to the hype</p>
    </div>
  )
}

export default Offerings
