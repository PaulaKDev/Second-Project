import React from "react";

const ComponenteA = ({ emoji, titulo }) => {
    return (
        <div className="container">
            <ComponenteC />
            <div>{titulo}</div>
        </div>
    );
};

export default ComponenteA;