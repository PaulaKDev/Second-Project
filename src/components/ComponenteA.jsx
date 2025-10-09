import React from "react";

const ComponenteA = ({ emoji, titulo }) => {
    return (
        <div className="container">
            <div>{emoji}</div>
            <div>{titulo}</div>
        </div>
    );
};

export default ComponenteA;