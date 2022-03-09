import React from "react";
import './header.css'
import OpenSiteDate from "./OpenSiteDate";

function Header() {
    const WydzialLink = 'https://www.kul.pl/aktualnosci,16388.html';
    const reactSite = 'https://pl.reactjs.org/';
    return (
        <div className='header'>
            <OpenSiteDate />
            <h1>Laboratorium programowania: frameworki aplikacji internetowych (laboratorium - Grupa 3)</h1>
            <a href={WydzialLink} target='_blank' rel='noreferrer'>Strona wydziału</a>
            <a href={reactSite} target='_blank' rel='noreferrer'>Strona Reacta</a>
        </div>
        )
}

export default Header;