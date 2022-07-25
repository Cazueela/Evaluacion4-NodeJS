import React, {useEffect,useState} from "react"
import PerfilFragment from "./PerfilFragment";
import Arica from "../assets/imagenes/arica.png";
import {Link} from "react-router-dom";

const Usuario = () => {

    const [nombre, setNombre] = useState("")
    const handleNombre = (evento) => {
        setNombre(nombre)
    }



    return (
        <>
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
                            <a className="nav-link" href="#">Portada|<span
                                className="sr-only">Post</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><Link to="/perfil">Ir a perfil</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>

            <hr></hr>

            <div className="col-4">
                <PerfilFragment
                    imagen={Arica}
                    titulo="En el morro de Arica"
                    textoDescripcion="Hoy visite el morro de Arica, Que les parece?" />
            </div>

            <hr></hr>

            <h1>Comentar</h1>
            <label htmlFor="usuario"><h5>Mensaje</h5></label>
            <br/>
            <input type="text"
                   placeholder="P.ej.: Hola"
            />

            <input type="checkbox"
                   name="terminos"/>

            <label htmlFor="terminos">Agregar emoticon👍</label> <br/>

            <button type="button" onClick={handleNombre}>Enviar</button>

            <hr></hr>

            <ul className="list-group">
                <li className="list-group-item active" aria-current="true">Comentarios</li>
                <li className="list-group-item">Que bonito lugar!</li>
                <li className="list-group-item">Me gustaria ir</li>
                <li className="list-group-item">Debe dar vertigo</li>
                <li className="list-group-item">Hola</li>
            </ul>

            <p>Tu comentario:{nombre}</p>

            <hr></hr>

        </>
    )
}

export default Usuario