import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios'
//   "idPersonaje": 0,
//   "nombre": "string",
//   "imagen": "string",
//   "idSerie": 0
export default class CrearPersonaje extends Component {
    url = Global.url
    cajaNombre = React.createRef()
    cajaImagen = React.createRef()
    selectSerie = React.createRef()

    state = {
        series: [],
        status:false
    }
    
    createPersonaje = (event) => {
        event.preventDefault();
        let request = "api/Personajes"
        let personaje = {
            idPersonaje: 0,
            nombre: this.cajaNombre.current.value,
            imagen: this.cajaImagen.current.value,
            idSerie: parseInt(this.selectSerie.current.value)
        }
        console.log(personaje);
        axios.post(this.url + request, personaje).then(() => {
            console.log("Personaje Creado");
            this.setState({
                status:true
            })
        })
    }

    loadSeries = () => {
        let request = "api/Series"
        axios.get(this.url + request).then(response =>{
            this.setState({
                series: response.data,
            })
        })
    }
    componentDidMount = () => {
        this.loadSeries()
    }
    render() {
        return (
            <div className="container-fluid mt-3">
                <h1>Crear personaje</h1>
                <hr className="border border-primary opacity-100"/>
                    <form onSubmit={this.createPersonaje}>
                        <div className="mt-3">
                            <label className="form-label">Nombre</label>
                            <input className="form-control" type="text"  ref={this.cajaNombre}/>
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >Imagen</label>
                            <input className="form-control" type="text" ref={this.cajaImagen}/>
                        </div>
                        <div className="mt-3">
                            <label className="form-label" >Serie</label>
                            <select className="form-select" ref={this.selectSerie}>
                                {
                                    this.state.series.map((serie,index) => {
                                        return(
                                            <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <button className="btn btn-success mt-3 w-100">Crear personaje</button>
                    </form>
                    {
                        this.state.status === true &&
                        <Navigate to={`/personajes/${this.selectSerie.current.value}`}/>
                    }
            </div>
        )
    }
}
