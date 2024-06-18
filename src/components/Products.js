import React from 'react'
import * as BS from 'react-icons/bs'

function Products() {
    const arr = [0, 1, 2, 3, 4]
    return (
        <div className='products'>
            <div className="products-list container d-flex justify-content-start align-items-start flex-wrap py-4">
                {
                    arr.map(() => (
                        <div className="product col-3 p-2">
                            <div className="product-content border border-1 d-flex flex-column gap-3 px-3 py-2">
                                <div className="product-img d-flex justify-content-center align-items-start">
                                    <img src="./products/iphone13.png" alt="" width={'80%'} />
                                </div>
                                <p className="product-title m-0 p-0">
                                    گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت
                                </p>
                                <div className="product-price d-flex justify-content-between align-items-center">
                                    <span>قیمت:</span>
                                    <span>500000 تومان</span>
                                </div>
                                <div className="add-to-cart d-flex justify-content-center">
                                    <button className='btn btn-outline-success btn-sm d-flex align-items-center gap-2'>
                                        <BS.BsCartPlus size={20} />
                                        <span>افزودن به سبد خرید</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )

                    )
                }


            </div>
        </div>
    )
}

export default Products
