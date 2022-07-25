import React, {useEffect,useState} from "react"
import {Link} from "react-router-dom"

const Inicio = () => {

    return (
        <>
            <hr></hr>
                <h1>¿A donde quieres ir?</h1>
            <div>
            <hr></hr>
                <h5>Ver mis gustos y virtudes</h5>
                <Link to="/perfil">Ir a perfil</Link> <br/>
            <hr></hr>
            <h5>Ver mi publicacion en la red social</h5>
                <Link to="/usuario">Ir a usuario</Link>
            <hr></hr>
            </div>
        </>
    )
}

export default Inicio