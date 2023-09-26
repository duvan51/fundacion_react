import React from 'react'

import MainOne from '../components/MainOne'
import MainTwo from '../components/MainTwo'
import MainThree from '../components/MainThree'
import MainFour from '../components/MainFour'
import MainFive from '../components/MainFive'


const HomePage = () => {
  return (
    <div className='bod'>
      <MainOne />
        <MainTwo />
        <MainThree id="#mainThree"/>
        <MainFour />
        <MainFive />
    </div>
  )
}

export default HomePage