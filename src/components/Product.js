import React from 'react'

const Product = (props) => {
    
    const {product}=props;
     const {id,product_name,quantity,price}=product;
    return (
        <tr>
            <td>{id}</td>   
            <td>{product_name}</td>   
            <td>{quantity}</td>   
            <td>{price}</td>   
        </tr>
    )
}

export default Product
