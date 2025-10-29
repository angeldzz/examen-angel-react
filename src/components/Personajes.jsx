import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class Personajes extends Component {
    url = Global.url
    state = {
        personajes: [],
    }
    loadPersonajes = () => {
        let request = "api/Series/PersonajesSerie/" + this.props.idSerie
        axios.get(this.url + request).then(response => {
            this.setState({
                personajes: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadPersonajes()
    }
    render() {
        return (
            <div className="container-fluid mt-3">
                <h1>Personajes de {this.props.idSerie}</h1>
                <hr className="border border-primary opacity-100"/>
                <NavLink className="btn btn-danger w-100" to={`/serie/${this.props.idSerie}`}>Volver a serie</NavLink>
                    <table className="table mt-3">
                        <thead className="border-primary">
                            <tr>
                                <th>Personaje</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.personajes.map((personaje,index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{personaje.nombre}</td>
                                            <td><img style={{width:"150px",height:"150px"}} src={personaje.imagen} alt="" /></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            </div>
        )
    }
}
