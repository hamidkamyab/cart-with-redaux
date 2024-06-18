import React from 'react'
import * as BS from 'react-icons/bs'

function Navbar() {
  return (
    <div className='navbar py-3 d-flex justify-content-center'>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="right">
            <BS.BsFillGridFill size={22} role='button' />
        </div>
        <div className="left">
            <div className="cartIcon" role='button'>
                <BS.BsCart2 size={22} />
                <span className='cart-num'>0</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
