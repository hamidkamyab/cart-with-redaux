import React from 'react'
import * as BS from 'react-icons/bs'

function Cart() {
    const arr = [0, 1, 2, 3, 4]
    return (
        <div className='cart position-relative'>
            <div className="cart-list container d-flex flex-column gap-2">
                {
                    arr.map(() => (
                        <div className="cart-item col-12 p-3 border border-1 d-flex align-items-stretch">
                            <div className="cart-img d-flex justify-content-center align-items-start">
                                <img src="./products/iphone13.png" alt="" width={'80%'} />
                            </div>
                            <div className="cart-details d-flex flex-wrap gap-2 w-100">
                                <p className="cart-title m-0 p-0 w-100">
                                    گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت
                                </p>
                                <div className="cart-product-price d-flex justify-content-start align-items-center gap-2 text-muted w-100">
                                    <span>قیمت واحد:</span>
                                    <span>500000 تومان</span>
                                </div>

                                <div className="add-to-cart d-flex justify-content-between align-self-end w-100">
                                    <div className="cart-price d-flex justify-content-start align-items-center gap-3">
                                        <button className='cart-remove'>
                                            <BS.BsTrashFill size={14} />
                                        </button>

                                        <div className='d-flex align-items-center'>
                                            <button className='cart-plus'>
                                                <BS.BsPlus size={18} />
                                            </button>
                                            <span className='cart-item-num'>1</span>
                                            <button className='cart-minus'>
                                                <BS.BsDash size={18} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="cart-price d-flex justify-content-start align-items-center gap-2">
                                        <span>قیمت:</span>
                                        <span>500000 تومان</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )

                    )
                }

            </div>

            <div className="total-price position-fixed bottom-0 d-flex align-items-center justify-content-center gap-2">
                <span>قیمت کل:</span>
                <span>50000000 تومان</span>
            </div>

        </div>
    )
}

export default Cart
