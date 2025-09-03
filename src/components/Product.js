import React from 'react'
import './Product.css';

const Product = () => {

    const products= [
        {id:1, name:"Laptop", description:"High Performance laptop", price: 55000},
        {id:2, name:"Mobile", description:"High Performance Mobile", price: 25000},
        {id:3, name:"Tablet", description:"High Performance Tablet", price: 30000},
        {id:4, name: "keyboard", description: "High Performance keyboard", price: 15000}
    ];
  return (
    <div className='product-container'>
        <h2 className='title'>
            Product List
        </h2>
        <table className='product-table'>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Description</th>
                    <th>Product Price ₹</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>

                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Product