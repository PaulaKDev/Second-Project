import React from "react";
import ComponenteC from "./Componente C";

const ComponenteA = ({ emoji, titulo }) => {

    return (
        <div className="container">
            <ComponenteC emoji={emoji} />
            <div>{titulo}</div>
        </div>
    );
};

export default ComponenteA;