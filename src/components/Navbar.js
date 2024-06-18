import React from 'react'
import * as BS from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Navbar() {
  const cart = useSelector((store) => store);

  return (
    <div className='navbar py-3 d-flex justify-content-center'>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="right">
          <Link to={'/'}>
            <BS.BsFillGridFill size={22} role='button' />
          </Link>
        </div>
        <div className="left">
          <Link to={'/cart'}>
            <div className="cartIcon" role='button'>
              <BS.BsCart2 size={22} />
              <span className='cart-num'>{cart.data.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
