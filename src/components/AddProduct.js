import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class AddUser extends Component {
    constructor() {
        super()
        this.state = {
            product_name: '',
            product_deskrip: '',
            product_price: '',
            quantity: '',
            product_gambar: null,
            // selectedFile: null,
            loaded: 0,
        }
    }
    handleselectedFile = event => {
        this.setState({
            product_gambar: event.target.files[0],
            loaded: 0,
        })
    }
    kirimData = () => {
        const data = new FormData()
        data.append('product_gambar', this.state.product_gambar, this.state.product_gambar.name)
        data.append('product_name', this.state.product_name)
        data.append('product_deskrip', this.state.product_deskrip)
        data.append('product_price', this.state.product_price)
        data.append('quantity', this.state.quantity)
        let endpoint = 'http://localhost:3006/product'
        axios.post(endpoint, data, {
            onUploadProgress: ProgressEvent => {
                this.setState({
                    loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
                })
            },
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        // this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <br />
                <Link className='btn grey' to='/'>Back</Link>
                <h1>Add Barang</h1>
                <form onSubmit={(e) => { e.preventDefault() }} encType="multipart/data">
                    <div className="input-field">
                        <input type="text" name="product_name"
                            onChange={(e) => { this.setState({ product_name: e.target.value }) }} />
                        <label htmlFor="name">Product Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="product_deskrip"
                            onChange={(e) => { this.setState({ product_deskrip: e.target.value }) }} />
                        <label htmlFor="name">Description</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="product_price"
                            onChange={(e) => { this.setState({ product_price: e.target.value }) }} />
                        <label htmlFor="name">Product Price</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="quantity"
                            onChange={(e) => { this.setState({ quantity: e.target.value }) }} />
                        <label htmlFor="name">Quantity</label>
                    </div>
                    <div className="input-field">
                        <input type="file" name="product_gambar"
                            onChange={this.handleselectedFile}
                        />
                    </div>
                    <br />
                    <div className="progress">
                        <div className="determinate" style={{ width: `${this.state.loaded}%` }}></div>
                    </div>
                    <input onClick={this.kirimData} type="submit" value="Save" className="btn" />
                </form>
            </div>
        )
    }
}

