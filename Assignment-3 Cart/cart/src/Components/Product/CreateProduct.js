import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {createProduct} from "../../redux/Product/actions"


function CreateProduct() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const dispatch = useDispatch();

    const fromSubmitHeandler = (e) =>{
        e.preventDefault();
        dispatch(createProduct(name, category, imageUrl,  price, quantity))
        setName('');
        setCategory('');
        setImageUrl('');
        setPrice('');
        setQuantity('');
    }

    return (
        <div>

            <div className="formContainer">
                <h4 className="formTitle">Add New Product</h4>
                <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={fromSubmitHeandler}>

                    <div className="space-y-2">
                        <label htmlFor="lws-inputName">Product Name</label>
                        <input
                            className="addProductInput"
                            id="lws-inputName"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="lws-inputCategory">Category</label>
                        <input
                            className="addProductInput"
                            id="lws-inputCategory"
                            type="text"
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="lws-inputImage">Image Url</label>
                        <input
                            className="addProductInput"
                            id="lws-inputImage"
                            type="text"
                            required
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-8 pb-4">

                        <div className="space-y-2">
                            <label htmlFor="ws-inputPrice">Price</label>
                            <input
                                className="addProductInput"
                                type="number"
                                id="lws-inputPrice"
                                required
                                value={price}
                                onChange={(e) => setPrice(parseInt(e.target.value, 10))}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="lws-inputQuantity">Quantity</label>
                            <input 
                            className="addProductInput" 
                            type="number" 
                            id="lws-inputQuantity" 
                            required
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                             />
                        </div>
                    </div>

                    <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct