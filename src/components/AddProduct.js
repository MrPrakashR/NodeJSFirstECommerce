import React from 'react'

const AddProduct = () => {

    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [company, setCompany] = React.useState('')
    const [error,setError] = React.useState(false)

    const addProductClick = async ()=>{
        console.warn(name,price,category,company)

        if (!name || !price || !category || !company) {
            setError(true)
            return false
        }

        const userId = JSON.parse(localStorage.getItem("user"))._id
        let result = await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{
                'Content-Type':"application/json"
            }
        })
        result = await result.json()
        console.warn(result)
    }

    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input type="text" placeholder='Enter your product name' className="inputBox"
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
            { error && !name && <span className='invalid-input'>Enter Valid Name</span>}

            <input type="text" placeholder='Enter your product price' className="inputBox"
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />
            { error && !price && <span className='invalid-input'>Enter Valid Price</span>}

            <input type="text" placeholder='Enter your product category' className="inputBox"
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />
            { error && !category && <span className='invalid-input'>Enter Valid Category</span>}

            <input type="text" placeholder='Enter your product company' className="inputBox"
                value={company} onChange={(e) => { setCompany(e.target.value) }}
            />
            { error && !company && <span className='invalid-input'>Enter Valid Company</span>}

            <button className="appButton" onClick={addProductClick}>Add Product</button>
        </div>
    )
}

export default AddProduct