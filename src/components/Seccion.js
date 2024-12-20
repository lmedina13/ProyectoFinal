import React from 'react';

function Seccion({ title, description,description2,additionalText, additionalText2 }) {
  return (
    <section className="seccion">
      <div className="seccion-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{description2}</p>
        {additionalText2 && <p>{additionalText2}</p>}
        {additionalText && <p>{additionalText}</p>}

      </div>
    </section>
  );
}

export default Seccion;

