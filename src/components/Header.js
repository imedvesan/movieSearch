import React from 'react'
import { Image } from 'react-bootstrap';
import Pic from '../../src/movieIcon.png'

const Header = () => {
  return (
    <header>
      <div className='flex'>
        <Image src={Pic} style={{width: "50px", height: "50px"}}/>
        <h1> Intrested in a movie?</h1>
    </div>
    </header>
  )
}

export default Header
