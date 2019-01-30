import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <React.Fragment>
                <select op={this.props.op}>
                    {this.props.op.map((item, i) => {
                        return (
                            <option key={i} op={this.props.op ? this.props.op : ''}>{item}</option>
                        )
                    })}
                </select>
            </React.Fragment>
        )
    }
} 