import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            product_name: '',
            product_deskrip: '',
            product_price: '',
            product_gambar: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentWillMount() {
        this.getDatasDetails()
    }
    getDatasDetails() {
        let dataId = this.props.match.params.id
        axios.get(`http://localhost:3006/product/${dataId}`)
            .then((respon) => {
                this.setState({
                    id: respon.data[0].id,
                    product_name: respon.data[0].product_name,
                    product_deskrip: respon.data[0].product_deskrip,
                    product_price: respon.data[0].product_price,
                    product_gambar: respon.data[0].product_gambar
                })

            })
            .catch((err) => { console.log(err) })
    }

    editUser(newUser) {
        axios.request({
            method: 'put',
            url: `http://localhost:3006/product/${this.state.id}`,
            data: newUser
        }).then((respon) => {
            this.props.history.push('/')
        }).catch((err) => { console.log(err) })

    }
    onSubmit(e) {
        const newUser = {
            product_name: this.refs.product_name.value,
            product_deskrip: this.refs.product_deskrip.value,
            product_price: this.refs.product_price.value,
            product_gambar: this.refs.product_gambar.value,
        }
        this.editUser(newUser);
        e.preventDefault();
    }
    handleInputChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                <br />
                <Link className='btn grey' to='/'>Back</Link>
                <h1>Edit User</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input onChange={this.handleInputChange} type="text" name="product_name" ref="product_name" value={this.state.product_name} />
                        <label htmlFor="name">Product Name</label>
                    </div>
                    <div className="input-field">
                        <input onChange={this.handleInputChange} type="text" name="product_deskrip" ref="product_deskrip" value={this.state.product_deskrip} />
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="input-field">
                        <input onChange={this.handleInputChange} type="text" name="product_price" ref="product_price" value={this.state.product_price} />
                        <label htmlFor="price">Price</label>
                    </div>
                    <div className="input-field">
                        <input onChange={this.handleInputChange} type="text" name="product_gambar" ref="product_gambar" value={this.state.product_gambar} />
                        <label htmlFor="image">Image</label>
                    </div>


                    <input type="submit" value="Save" className="btn" />
                </form>
            </div>
        )
    }
}