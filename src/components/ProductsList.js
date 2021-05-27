import React from 'react'
import Product from './Product'
import "./ProductsList.css"

const ProductsList = (props) => {
    
    // const productsList=props.productsList

    const {productsList}=props
    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            {
                productsList.map((item)=>(
                    <Product key={item.id} product={item} />
                ))
            }
        </table>
    )

}

export default ProductsList
