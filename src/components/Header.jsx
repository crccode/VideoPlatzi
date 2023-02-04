//IMPORTAMOS REACT 
import React from 'react';
//CREAMOS COMPONENTES CREACIONALES LOS CUALES NO TIENEN LOGIACA SOLO EMPUJAN UNA SECCION DE HTML

// CREO UNA CONSTANTE CON UN RETURN EXPLICITO
const Header =() =>{
    // Usamos className no class
    <header className="header">
        //LOGO
        <img className="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video"/>
        //MENU PERFIL, EL CUAL TIENE DOS SUBMENU
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="../assets/user-icon.png" alt=""/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
  </header>

}; 
//LISTO NUESTROCOMPONENTE YA ESTA LISTO PARA VISUALIZARLO   
export default Header; 