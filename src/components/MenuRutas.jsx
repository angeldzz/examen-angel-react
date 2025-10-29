import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../Global'
import axios from 'axios'
export default class MenuRutas extends Component {
    state = {
        series: []
    }
    url = Global.url
    loadSeries = () => {
        let request = "api/Series"
        axios.get(this.url + request).then(response =>{
            this.setState({
                series: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadSeries()
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <img style={{ width: "80px", height: "60px" }} src="https://appseries.azurewebsites.net/static/media/logo1.1408c71b2c87ca1fb473.png" alt='img' />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/crearPersonaje"
                                >
                                    Nuevo personaje
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/modificarPersonaje"
                                >
                                    Modificar personaje
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Series
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        this.state.series.map((serie,index) => {
                                            return(
                                                <li key={index}>
                                                    <NavLink
                                                        className="dropdown-item"
                                                        to={`/serie/${serie.idSerie}`}
                                                    >
                                                        {serie.nombre}
                                                    </NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
