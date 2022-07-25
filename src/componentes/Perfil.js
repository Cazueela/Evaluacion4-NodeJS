import React, {useEffect,useState} from "react"
import {Link} from "react-router-dom"
import PerfilFragment from "./PerfilFragment";
import Arica from "../assets/imagenes/arica.png"
import Simpatico from "../assets/imagenes/simpatico.png"
import Tarkov from "../assets/imagenes/tarkov.png"

const Perfil = () => {


    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Edmond Jure Jaque</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                    <a className="nav-link" href="#">Home<span
                                    className="sr-only">(Mantenimiento)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><Link to="/usuario">Ir a usuario</Link></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="jumbotron text-center mb-4">
                    <hr></hr>
                    <h1>Mi biografia</h1>
                    <p>Soy un joven que estudia en Inacap la carrera de `Analista Programador`, tengo 20 años, me gusta mucho practicar deporte
                    pero desde que me lesione no he podido.</p>
                    <hr></hr>

                </div>

                <div className="row">
                    <div className="col-4">
                        <PerfilFragment
                            imagen={Arica}
                            titulo="¿De donde soy?"
                            textoDescripcion="Mi ciudad natal es Arica, desde muy pequeño me fui a vivir a los pueblos del interior y ahora grande vine a vivir a Calama." />
                    </div>

                    <div className="col-4">
                        <PerfilFragment
                            imagen={Simpatico}
                            titulo="¿Como me considero?"
                            textoDescripcion="Me considero una persona simpatica y de gustos simples, tambien me gustan mucho los videojuegos." />
                    </div>

                    <div className="col-4">
                        <PerfilFragment
                            imagen={Tarkov}
                            titulo="¿Que juego?"
                            textoDescripcion="Juego de todo, literalmente, pero a lo que mas juego es a `Escape from Tarkov`." />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Perfil