import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class Useritemdetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: ''
        }
    }
    componentWillMount() {
        this.getDatas();
    }
    getDatas() {
        let dataId = this.props.match.params.id
        console.log(dataId)
        axios.get(`http://localhost:3006/product/${dataId}`)
            .then((respon) => {
                console.log(respon.data[0])
                this.setState({
                    details: respon.data[0]
                })
                console.log(this.state.details.id)
            })
            .catch((err) => { console.log(err) })
    }
    onDelete() {
        let dataId = this.state.details.id;
        console.log(this.state.details.id)
        axios.delete(`http://localhost:3006/product/${dataId}`)
            .then((respon) => {

                this.props.history.push('/')
            })
            .catch((err) => { console.log(err) })
    }
    render() {
        return (
            <div>
                <br />
                <Link className='btn grey' to='/'>Back</Link>
                <h1>{this.state.details.product_name}</h1>
                <ul className="collection">
                    <li className="collection-item">{this.state.details.product_deskrip}</li>
                </ul>
                <Link className="btn" to={`/product/edit/${this.state.details.id}`}>Edit</Link>
                <button
                    onClick={this.onDelete.bind(this)}
                    className="btn red right">Delete</button>
            </div>
        )
    }
}