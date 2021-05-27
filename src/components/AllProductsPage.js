import React from 'react'
import ProductsList from './ProductsList'

const AllProductsPage = () => {

    const productsData=[
        {
            id:1,
            product_name:"Moto G5",
            quantity:2,
            price:"Rs.13000"
        },
        {
            id:2,
            product_name:"Racold Geyser",
            quantity:3,
            price:"Rs.6000"
        },
        {
            id:3,
            product_name:"Dell Inspiron",
            quantity:4,
            price:"Rs.50000"
        }
    ]
    
    return (
        <div>
            <h1>Products List</h1>
            <ProductsList productsList={productsData} />
        </div>
    )
}

export default AllProductsPage
