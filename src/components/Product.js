import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Useritem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: props.item,
            index: props.index
        }
    }
    render() {
        return (
            < React.Fragment >
                <tr>
                    <td>{this.state.index + 1}</td>
                    {console.log(this.props.index)}
                    <td>{this.state.item.product_name}</td>
                    <td>{this.state.item.product_deskrip}</td>
                    <td>Rp.{this.state.item.product_price}</td>
                    <td><img style={{ maxWidth: '50px', maxHeight: '50px' }} src={`../public/assets/img/${this.state.item.product_gambar}`} alt='gam' /></td>
                    <td><Link to={`/product/${this.state.item.id}`} className="btn waves-effect waves-light">Edit</Link>
                    </td>
                </tr>
            </React.Fragment >
        )
    }
}