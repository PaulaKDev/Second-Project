import React from "react";
import ComponenteC from "./ComponenteC";

const ComponenteA = ({ emoji, titulo }) => {
  return (
    <section className="container" aria-labelledby="titulo-componente">
      <ComponenteC emoji={emoji} />
      <h2 id="titulo-componente">{titulo}</h2>
    </section>
  );
};

export default ComponenteA;