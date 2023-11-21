import React from 'react'
import Welcome from './Welcome'
import UseCase from './UseCase';
import Benefits from './Benefits';
import Offerings from './Offerings';


export default function LandingPage() {
  return (
    <div>
        <Welcome />
        <UseCase/>
        <Benefits />
        <Offerings />
    </div>
  )
}
