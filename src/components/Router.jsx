import React, { Component } from 'react'
import { BrowserRouter,Routes,Route, useParams } from "react-router-dom";
import MenuRutas from './MenuRutas';
import HomeSeries from './HomeSeries';
import Serie from './Serie';
import CrearPersonaje from './CrearPersonaje';
import ModificarPersonaje from './ModificarPersonaje';
import Personajes from './Personajes';
export default class Router extends Component {
  render() {
    function ElementSerie () {
        let {idSerie} = useParams()
        return(<Serie idSerie={idSerie}/>)
    }
    function ElementPersonajes () {
        let {idSerie} = useParams()
        return(<Personajes idSerie={idSerie}/>)
    }
    return (
        <BrowserRouter>
        <MenuRutas/>
        <Routes>
            <Route path='/' element={<HomeSeries/>}/>
            <Route path='/crearPersonaje' element={<CrearPersonaje/>}/>
            <Route path='/modificarPersonaje' element={<ModificarPersonaje/>}/>
            <Route path='/serie/:idSerie' element={<ElementSerie/>}/>
            <Route path='/personajes/:idSerie' element={<ElementPersonajes/>}/>
        </Routes>
        </BrowserRouter>
    )
  }
}
