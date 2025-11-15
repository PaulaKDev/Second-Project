import React from "react";

const ComponenteB = ({ textoBtn, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={textoBtn}
    >
      {textoBtn}
    </button>
  );
};

export default ComponenteB;