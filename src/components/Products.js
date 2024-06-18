import React, { useEffect } from 'react'
import * as BS from 'react-icons/bs'
import products from '../data'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2';

function Products() {
    const cart = useSelector((store) => store);
    const dispatch = useDispatch()

    useEffect(() => {
        if (cart.error == 1) {
            Swal.fire({
                icon: 'info',
                'title': 'محصول در سبد خرید موجود است!',
                'confirmButtonText': 'متوجه شدم'
            })
        }
    }, [cart]);

    return (
        <div className='products'>
            <div className="products-list container d-flex justify-content-start align-items-stretch flex-wrap py-4">
                {
                    products.map((product, index) => (
                        <div className="product col-3 p-2" key={index}>
                            <div className="product-content border border-1 d-flex flex-wrap justify-content-center align-items-start gap-3 px-3 py-2">
                                <div className="product-img d-flex justify-content-center align-items-start">
                                    <img src={product.img} alt="" width={'80%'} />
                                </div>
                                <p className="product-title m-0 p-0">
                                    {product.title}
                                </p>
                                <div className="product-price d-flex justify-content-between align-items-center align-self-end">
                                    <span>قیمت:</span>
                                    <span>{product.price} تومان</span>
                                </div>
                                <div className="add-to-cart d-flex justify-content-center align-self-end">
                                    <button className='btn btn-outline-success btn-sm d-flex align-items-center gap-2' onClick={() => dispatch({ type: 'ADD', payload: product })}>
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
