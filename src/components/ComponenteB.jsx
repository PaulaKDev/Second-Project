import React from "react";

const ComponenteB = ({ textoBtn}) => {

    const handleClick = () => {
        alert("Buscando Destino...");
    };
    return (
        <button onClick={handleClick}>{textoBtn}</button>
    );

};

export default ComponenteB;