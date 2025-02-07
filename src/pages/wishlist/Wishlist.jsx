import React, { useEffect } from 'react'
import { useStateValue } from '../../components/context'
import Product from '../../components/product/Product'
import Wisherror from '../../components/wisherror/Wisherror';
const Wishlist = () => {
    let [state] = useStateValue();
    console.log(state.wishlist);

    useEffect(() => {
        window.scrollTo({ behavior: "smooth", left: 0, top: 0 })
    }, [])


    return (
        <div>
            {
                state.wishlist.length ?
                    <Product products={state.wishlist}>
                        <div className="mb-12 text-[black] text-start border-b">
                            <h2 className="mb-2.5 text-[28px] font-bold">Your wishlist</h2>
                        </div>
                    </Product>
                    :
                    <Wisherror />
            }

        </div>
    )
}

export default Wishlist