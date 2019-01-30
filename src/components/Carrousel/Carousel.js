import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class Carousel extends Component {
    constructor() {
        super()
        this.state = {
            judul: '',
            deskrip: '',
            filename: null,
            // selectedFile: null,
            // loaded: 0,
        }
    }
    handleselectedFile = event => {
        this.setState({
            filename: event.target.files[0],
            loaded: 0,
        })
    }
    kirimData = () => {
        const data = new FormData()
        data.append('filename', this.state.filename, this.state.filename.name)
        data.append('judul', this.state.judul)
        data.append('deskrip', this.state.deskrip)
        let endpoint = 'http://localhost:3006/carousel'
        axios.post(endpoint, data, {
            onUploadProgress: ProgressEvent => {
                this.setState({
                    loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
                })
            },
        })
            .then(res => {
                console.log(res)
            })
        this.props.history.push('/')
        // let url = 'http://localhost:3006/carousel'
        // axios.post(url, {
        //     judul: this.state.judul,
        //     deskrip: this.state.deskrip,
        //     filename: this.state.filename
        // })
        //     .then((x) => {
        //         console.log(x)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        // this.props.history.push(`/`)
    }


    render() {
        return (
            <React.Fragment>
                <br />
                <Link className='btn grey' to='/'>Back</Link>
                <h1>Add Slide Show</h1>
                <form onSubmit={(e) => { e.preventDefault() }} encType="multipart/data">
                    <div className="input-field">
                        <input type="text" name="judul"
                            onChange={(e) => { this.setState({ judul: e.target.value }) }} />
                        <label htmlFor="name">Judul Slide</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="deskrip"
                            onChange={(e) => { this.setState({ deskrip: e.target.value }) }} />
                        <label htmlFor="name">Deskripsi Slide</label>
                    </div>
                    <div className="input-field">
                        <input type="file" name="filename"
                            onChange={this.handleselectedFile} />
                        <label htmlFor="name">Gambar</label>
                    </div>
                    <input onClick={this.kirimData} type="submit" value="Save" className="btn" />
                </form>

            </React.Fragment >
        )
    }
}