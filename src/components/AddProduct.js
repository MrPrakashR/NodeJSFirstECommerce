import React from 'react'

const AddProduct = () => {

    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [company, setCompany] = React.useState('')
    const addProductClick = ()=>{
        console.warn(name,price,category,company)
    }

    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input type="text" placeholder='Enter your product name' className="inputBox"
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
            <input type="text" placeholder='Enter your product price' className="inputBox"
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />
            <input type="text" placeholder='Enter your product category' className="inputBox"
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />
            <input type="text" placeholder='Enter your product company' className="inputBox"
                value={company} onChange={(e) => { setCompany(e.target.value) }}
            />
            <button className="appButton" onClick={addProductClick}>Add Product</button>
        </div>
    )
}

export default AddProduct