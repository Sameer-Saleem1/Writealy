import React from 'react'
import { VscPlay } from "react-icons/vsc";
import { HiArrowCircleRight } from "react-icons/hi";
import usecase from '../assets/img/usecase.png'

const UseCase = () => {
  return (
    <div id='usecase' className='usecase-container'>
      <div className='inner-usecase'>
        <div style={{marginBottom:'6px'}}><VscPlay /></div>
        <div className='usecase-heading'>use cases</div>
        <h1>Automate what’s automatable in <br/>content</h1>
        <span className='workflow'>Writer accelerates your writing workflow, from <br/></span>
        <span className='workflow'>Writing <HiArrowCircleRight /> {' '}</span>
        <span className='workflow'>Ideation <HiArrowCircleRight /> {' '}</span>
        <span className='workflow'>Illustrating </span>
      </div>

      <div className='usecase-profile'>
        <img src={usecase} alt="usecasepic"/>
        <div className='usecase-info'>
            <div className='usecase-info-container'>
                <div className='vertical-line'></div>   
                <div style={{marginLeft: '7px'}}>
                    <div className='usecase-info-heading' style={{color:'black'}}>Ideate Faster</div>
                    <div className='usecase-info-heading-detail' style={{color:'black'}}>Use AI as your <br/> brainstorming partner</div>
                </div>
            </div>

            <div className='usecase-info-heading' style={{marginLeft:'25px', marginTop:'1rem'}}>Write faster</div>
             <div className='usecase-info-heading-detail' style={{marginLeft:'25px'}}>Generate first drafts in  <br/> seconds</div>
             
            <div className='usecase-info-heading' style={{marginLeft:'25px', marginTop:'1rem'}}>Edit faster</div>
             <div className='usecase-info-heading-detail' style={{marginLeft:'25px'}}>Automate brand, editorial, <br/> and style edits</div>
             
            <div className='usecase-info-heading' style={{marginLeft:'25px', marginTop:'1rem'}}>Illustrate Faster</div>
             <div className='usecase-info-heading-detail' style={{marginLeft:'25px'}}>Instantly produce  <br/> distribution content</div>
             
            <div className='usecase-info-heading' style={{marginLeft:'25px', marginTop:'1rem'}}>Publish Faster</div>
             <div className='usecase-info-heading-detail' style={{marginLeft:'25px'}}>Turn a blog post into a <br/> case study — or vice versa</div>
        </div>
      </div>
    </div>
  )
}

export default UseCase
