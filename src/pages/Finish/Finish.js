import React from 'react'
import './finish.scss'
import { Link } from 'react-router-dom'

const Finish = () => {
  return (
    <div className='finish'>
        <div className='box'>
        <img src='https://t3.ftcdn.net/jpg/05/28/01/90/360_F_528019094_odSClYkLNg5cpWEYSESbbWDejb1wVWZ4.jpg'></img>
        <h1>SUCCESS!!</h1>
            <p>Your order has been successfully placed and the item's details will be mailed to you shortly</p>

        <Link to='/'><button>Shop More</button></Link>
        </div>
    </div>
  )
}

export default Finish