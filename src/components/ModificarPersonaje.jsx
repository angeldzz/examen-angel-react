import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from "react-router-dom";
export default class ModificarPersonaje extends Component {
    url = Global.url
    selectPersonajes = React.createRef()
    selectSeries = React.createRef()
    state = {
        personajes: [],
        series: [],
        status: false
    }
    loadPersonajes = () => {
        let request = "api/Personajes"
        axios.get(this.url + request).then(response =>{
            this.setState({
                personajes: response.data
            })
        })
    }
    loadSeries = () => {
        let request = "api/Series"
        axios.get(this.url + request).then(response =>{
            this.setState({
                series: response.data
            })
        })
    }
    modificarPersonaje = (event) => {
        event.preventDefault();
        let idPersonaje = this.selectPersonajes.current.value
        let idSerie = this.selectSeries.current.value
        let request = `api/Personajes/${idPersonaje}/${idSerie}`
        axios.put(this.url + request).then(() => {
            this.setState({
                status:true
            })
        })
    }
    componentDidMount = () => {
        this.loadPersonajes()
        this.loadSeries()
    }
    render() {
        return (
            <div className="container-fluid mt-3">
                <h1>Modificar personaje</h1>
                <hr className="border border-primary opacity-100" />
                <form onSubmit={this.modificarPersonaje}>
                    <div className="mt-3">
                        <label className="form-label">Serie</label>
                        <select className="form-select" ref={this.selectSeries}>
                            {
                                this.state.series.map((serie,index)=>{
                                    return(
                                        <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="mt-3">
                        <label className="form-label">Personaje</label>
                        <select className="form-select" ref={this.selectPersonajes}>
                            {
                                this.state.personajes.map((personaje,index)=>{
                                    return(
                                        <option key={index} value={personaje.idPersonaje}>{personaje.nombre}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button className="btn btn-success w-100 mt-3">Modificar personaje</button>
                </form>
                <div className="row mt-3"></div>
                {
                    this.state.status === true &&
                    <Navigate to={`/personajes/${this.selectSeries.current.value}`}/>
                }
            </div>
        )
    }
}
