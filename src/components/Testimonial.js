import React from "react";
import '../styles/testimonial.css';

function Testimonial(prop)
{
  return (
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio" 
        src={require(`../images/${prop.img}.png`)}
        alt={`Foto ${prop.name}`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{prop.name}</strong> en {prop.country}
        </p>
        <p className="cargo-testimonio">
          {prop.role} en <strong>{prop.company}</strong>
        </p>
        <p className="texto-testimonio">
        {prop.testimonial}
        </p>
      </div>
    </div>
  );
}

export default Testimonial;