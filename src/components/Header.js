import React from 'react'
import {Link} from 'react-router-dom'
import { Image } from 'react-bootstrap';
import Pic from '../../src/movieIcon.png'

const Header = () => {
  return (
    <header>
      <div className='flex'>
        <Image src={Pic} style={{width: "50px", height: "50px"}}/>
        <h1> Intrested in a movie?</h1>
    </div>

    <div className='headerLinks'>
      <div>
        <Link to={`/`}>Home</Link>
      </div>
      <div>
        <Link to={`/reviewed`}>Reviewed Movies</Link>
      </div>
    </div>
    </header>
  )
}

export default Header
