import React, {useEffect,useState} from "react"
import {Routes,Route,Link} from "react-router-dom"
import Inicio from "./componentes/Inicio"
import Perfil from "./componentes/Perfil"
import PerfilFragment from "./componentes/PerfilFragment";
import Usuario from "./componentes/Usuario"

/*Componente vista: llamado App*/
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/perfilFragment" element={<PerfilFragment />} />
        </Routes>
    )
}

export  default App