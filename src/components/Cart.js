import React, { useEffect, useState } from 'react'
import * as BS from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2';

function Cart() {
    const cart = useSelector(store => store);
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0)

    const handleRemove = (item) => {
        Swal.fire({
            title: "آیا قصد حذف محصول از سبد خرید را دارید؟",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "بله, حذفش کن!",
            cancelButtonText: 'لـــغو'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({ type: 'REMOVE', payload: item })
            }
        });

    }

    const handleTotalPrice = (acc, current) => {
        return acc = acc + (current.price * current.qty)
    }

    useEffect(() => {
        setTotalPrice(() => cart.data.reduce(handleTotalPrice, 0))
    }, [cart]);

    return (
        <div className='cart position-relative'>
            <div className="cart-list container d-flex flex-column gap-2">
                {
                    cart.data.length > 0 ?
                        cart.data.map((item, index) => (
                            <div className="cart-item col-12 p-3 border border-1 d-flex align-items-stretch" key={index}>
                                <div className="cart-img d-flex justify-content-center align-items-start">
                                    <img src={item.img} alt="" width={'80%'} />
                                </div>
                                <div className="cart-details d-flex flex-wrap gap-2 w-100">
                                    <p className="cart-title m-0 p-0 w-100">
                                        {item.title}
                                    </p>
                                    <div className="cart-product-price d-flex justify-content-start align-items-center gap-2 text-muted w-100">
                                        <span>قیمت واحد:</span>
                                        <span>{item.price.toLocaleString()} تومان</span>
                                    </div>

                                    <div className="add-to-cart d-flex justify-content-between align-self-end w-100">
                                        <div className="cart-price d-flex justify-content-start align-items-center gap-3">
                                            <button className='cart-remove' onClick={() => handleRemove(item)} >
                                                <BS.BsTrashFill size={14} />
                                            </button>

                                            <div className='d-flex align-items-center'>
                                                <button className='cart-plus' onClick={() => dispatch({ type: 'INCREASE', payload: item })}>
                                                    <BS.BsPlus size={18} />
                                                </button>
                                                <span className='cart-item-num'>{item.qty}</span>
                                                <button className='cart-minus' onClick={() => dispatch({ type: 'DECREASE', payload: item })} disabled={item.qty > 1 ? false : true} >
                                                    <BS.BsDash size={18} />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="cart-price d-flex justify-content-start align-items-center gap-2">
                                            <span>قیمت:</span>
                                            <span>{(item.price * item.qty).toLocaleString()} تومان</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                        :
                        <div className='w-100 mt-5 pt-5 d-flex align-items-center justify-content-center gap-2 text-danger'>
                            <BS.BsCartX size={60} />
                            <h2>سبد خرید خالی است!</h2>

                        </div>
                }

            </div>

            <div className="total-price position-fixed bottom-0 d-flex align-items-center justify-content-center gap-2">
                <span>قیمت کل:</span>
                <span>{totalPrice.toLocaleString()} تومان</span>
            </div>

        </div>
    )
}

export default Cart
