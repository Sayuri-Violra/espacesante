import React from 'react';
import {useEffect, useState} from "react";
import './Back.css';


function BackToTopButton () {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect (() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp =() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div className="App">

        {backToTopButton && (
            <button className="Halo"
                style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                }}
                onClick={scrollUp}
            
            >
                Retour en haut &nbsp;^</button>
        )}
    </div>;
}

export default BackToTopButton;