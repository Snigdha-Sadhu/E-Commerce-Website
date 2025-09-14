import React from 'react'
import ProductList from '../productlist/ProductList'
import Card from '../card/Card'
import Banner from '../banner/Banner'

const Categorypage = ({ addtobag, title, bgimg, categories = [] }) => {
    let filteritems = categories.includes('All') ? ProductList
        : ProductList.filter(item => categories.includes(item.category))

    const renderproduct = filteritems.map(product => {
        return (
            <Card image={product.image} name={product.name} price={product.price} addtobag={addtobag} />
        )
    })
    return (
        <div>
            <Banner title={title} bgimg={bgimg} />
            <div className='grid grid-coks-9 md:grid-cols-4 gap-9 py-20 max-w-[1400px] px-10'>
                {renderproduct}
            </div>
        </div>
    )
}

export default Categorypage
