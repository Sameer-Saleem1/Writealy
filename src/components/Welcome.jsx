import React from 'react'
import Image from '../assets/img/welcome.png'

export default function Welcome() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <span className='brainstorm'>Brainstorm <br/></span>
            <span className='book'>your book <br/>easily.<br/></span>
            <div className='book-text'>World-class companies use Writealy <br/> AI writing platform to unlock <br/> brainstorming for publishing a book.
            </div>
        </div>
        <div className='row'>
            <img className='img' src={Image} alt='xyz' />
        </div>
      </div>
    </div>
  )
}
