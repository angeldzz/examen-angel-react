import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios'
export default class Serie extends Component {
    state = {
        serie: []
    }
    url = Global.url
    loadSerie = () => {
        let request = "api/Series/" + this.props.idSerie
        axios.get(this.url + request).then(response => {
            this.setState({
                serie: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadSerie()
    }
    componentDidUpdate = (oldProps) => {
        if(oldProps.idSerie !== this.props.idSerie){
            this.loadSerie()
        }
    }
    render() {
        return (
            <div className="container-fluid mt-3">
                <hr className="border border-primary opacity-100"/>
                    <div className="card">
                        <img className="card-img-top" alt=""
                            src={this.state.serie.imagen}
                            style={{height: "250px", width: "250px", display: "block"}}/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {this.state.serie.nombre}
                                </h5>
                                <p className="card-text">IMDB: {this.state.serie.puntuacion}</p>
                                <NavLink className="btn btn-primary w-100" to={`/personajes/${this.state.serie.idSerie}`}>Personajes</NavLink>
                            </div>
                    </div>
            </div>
        )
    }
}
