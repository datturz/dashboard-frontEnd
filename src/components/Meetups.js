import React, { Component } from 'react'
import axios from 'axios'
import UserItems from './Product'
export default class Meetups extends Component {
    constructor() {
        super();
        this.state = {
            meetups: []
        }
    }

    componentWillMount() {
        this.getData();
    }
    getData() {
        axios.get('http://localhost:3006/product')
            .then((respon) => {
                this.setState({
                    meetups: respon.data
                })
            })
            .catch((err) => { console.log(err) })
    }
    render() {
        const userItems = this.state.meetups.map((dataItem, i) => {
            return (
                <UserItems key={dataItem.id} item={dataItem} index={i} />
            )
        })
        return (
            <div className="container-fluid">
                <h2>Dashbord V1.0.0</h2>
                <table className='highlight responsive-table'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Product Harga</th>
                            <th>Product Picture</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userItems}
                    </tbody>

                </table>
            </div >
        )
    }
}