import React from 'react'
import benefits1 from '../assets/img/benefits1.png'
import benefits2 from '../assets/img/benefits2.png'
import benefits3 from '../assets/img/benefits3.png'
import benefits4 from '../assets/img/benefits4.png'
import enterprise from '../assets/img/enterprise.png'

export default function Benefits() {
  return (
    <div className='benefits-container'>
      <h1>Benefits</h1>
      <div className='benefits-info-container'>
        <div className='right-column'>
            <div className='main-heading'>Create content in <br/>minutes, not months</div>
            <p>Create original content that actually sounds like <br/> your company wrote it.</p>
            <p>Writer is the only AI writing platform that can be <br/>
                trained on your own best-performing content<br/>
                and brand guidelines.</p>
            <p>It's <span>your own AI,</span> specifically tuned for your team’s<br/> unique use cases.</p>
        </div>

        <div className='left-column'>
            <img src={benefits1} alt='benefits-img' />
        </div>
      </div>

      <div className='benefits-info-container'>
        <div className='right-column'>
            <div className='main-heading'>Build a brand that is<br/> consistent — everywhere</div>
            <p>Generic ad copy. Outdated messaging on your <br/>website. Poorly-written docs.</p>
            <p>All of this can kill a buyer’s journey — and your<br/> brand. Writer gives you all the tools you need to</p>
            <p><span>build a consistent brand</span> across every customer<br/> touchpoint, and do it efficiently.</p>
        </div>

        <div className='left-column'>
            <img src={benefits2} alt='benefits-img' />
        </div>
      </div>

      <div className='benefits-info-container'>
        <div className='right-column'>
            <div className='main-heading'>Drive revenue, not <br/>review cycles</div>
            <p>‘Let’s be a media company,’ they say — but<br/> without the required headcount or budget.</p>
            <p>Do it anyway.</p>
            <p><span>10x the productivity</span>of your best writers, and<br/> make it so everyone else in the company can<br/> contribute on-brand content, too — without the<br/> rewrites.</p>
        </div>

        <div className='left-column'>
            <img src={benefits3} alt='benefits-img' />
        </div>
      </div>

      <div className='benefits-info-container'>
        <div className='right-column'>
            <div className='main-heading'>Be secure with <br/>enterprise features</div>
            <p>What you write will never make it into our models.</p>
            <p>Your data is analyzed transiently, so what you<br/> edit or generate isn’t collected or used by Writer.</p>
            <p>Writer is the only AI writing platform that both <br/>users and infosec teams love.</p>
            <img src={enterprise} alt='enterprise' className='enterprise' />
        </div>

        <div className='left-column'>
            <img src={benefits4} alt='benefits-img' />
        </div>
      </div>
    </div>
  )
}
