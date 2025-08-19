import React from 'react'

function ShopCard() {
    return <div className='shop-card '>
        <div className="name">
            <h1>Raju Clothes</h1>
        </div>
        <div className="shop-image h-[90%] w-full">
            <img src="/assets/shopPhoto.webp" alt="shop-photo" height={"100%"} width={"100%"} />
        </div>
        <div className="enter">
            Enter
        </div>
    </div>

}

export default ShopCard