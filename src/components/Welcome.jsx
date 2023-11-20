import React from 'react'
import { VscArrowRight } from "react-icons/vsc";
import Image from '../assets/img/welcome.png'
import teams from '../assets/img/teams.png'
import card1 from '../assets/img/card-1.png'
import card2 from '../assets/img/card-2.png'
import card3 from '../assets/img/card-3.png'
import card4 from '../assets/img/card-4.png'
import card5 from '../assets/img/card-5.png'
import card6 from '../assets/img/card-6.png'

export default function Welcome() {
  return (
    <>
      <div className='container'>
        <div className='row'>
            <span className='brainstorm'>Brainstorm <br/></span>
            <span className='book'>your book <br/>easily.<br/></span>
            <div className='book-text'>World-class companies use Writealy <br/> AI writing platform to unlock <br/> brainstorming for publishing a book.
            </div>
            <button className='demo'>Request a Demo</button>
            <button className='free'>Try For Free</button>
        </div>
        <div className='row'>
            <img className='img' src={Image} alt='xyz' />
            <span className='overview'>Watch The Product Overview</span>
                <span className='min'>{'  '}3 min</span>
        </div>
      </div>

      <div className='content-teams'>
          <div className='content-teams-text'>The world’s most effective content teams use Writer <VscArrowRight className='circleright'/></div>
          <img src={teams} alt='team' className='teams'/>
      </div>

      <div className='people-container'>
        <div className='people-text' > <b>People who has published their books using writealy</b></div>

        <div className='card-container'>

            <div className='card'>
              <img src={card1} alt='card-1'/>
            </div>
            <div className='card'>
              <img src={card2} alt='card-2'/>
            </div>
            <div className='card'>
              <img src={card3} alt='card-3'/>             
            </div>

            <div className='card'>
              <img src={card4} alt='card-4'/>
            </div>
            <div className='card'>
              <img src={card5} alt='card-5'/>
            </div>
            <div className='card'>
              <img src={card6} alt='card-6'/>
            </div>

        </div>
      </div>
    </>
  )
}
