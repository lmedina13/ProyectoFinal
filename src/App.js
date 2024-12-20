import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Seccion from './components/Seccion';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <Seccion
              title="Bienvenido a mi sitio web"
              description="Este es un sitio web de ejemplo. Aquí encontrarás información sobre diferentes temas."
              additionalText="Contamos con una amplia variedad de temas populares."
            />
          }
        />
        <Route
          path="/seccion2"
          element={
            <Seccion
              title="Temas Principales"
              description="Explora nuestros temas destacados."
              description2="SITUACION EN CULIACAN SINALOA"
              additionalText2="La ciudad de Culiacán, capital de Sinaloa, ha sido testigo de una serie de incidentes que han sacudido la conciencia nacional.

La violencia, el crimen organizado y la inseguridad han alcanzado niveles alarmantes, dejando a la población en un estado de miedo y desesperanza.

La liberación de Ovidio Guzmán, hijo del Chapo Guzmán, y la captura de el “Mayo Zambada” ha puesto de manifiesto la insuficiencia de de las fuerzas de seguridad frente al poder de los cárteles.

Cómo olvidar la escena de la liberación, con hombres armados desplegados por la ciudad y la población escondida en sus hogares, es un claro ejemplo de la falta de control que ha tenido el gobierno sobre ciertas regiones del país.

Culiacán lleva 5 días de enfrentamientos graves, que asemejan una guerrilla. Incendios, balaceras, robo de vehículos y personas. Creando un clima de inestabilidad y pánico en la población.

Pero Culiacán no es solo una ciudad dominada por el crimen organizado.

Es una ciudad con una rica historia, una cultura vibrante y una población que lucha por vivir con dignidad.

Es hora de que el gobierno federal y estatal tomen medidas efectivas para recuperar el control de la ciudad y dejen de minimizar los daños a la población, especialmente la de menores de edad.

Que merecen un lugar donde desarrollarse en paz y armonía.

Es su deber y responsabilidad brindar seguridad a sus habitantes.

La solución no es solo militar, sino también social y económica.

Se necesita invertir en educación, salud y empleo para que los jóvenes tengan opciones diferentes a la delincuencia.

Se requiere también una justicia efectiva que castigue a los culpables y proteja a las víctimas.

Culiacán es un espejo de lo que ocurre en muchos lugares de México.

Es hora de que nos miremos en ese espejo y tomemos medidas para cambiar la realidad.

México merece un futuro mejor."
              additionalText="Cada uno de nuestros temas ha sido cuidadosamente seleccionado para garantizar la calidad."
            />
          }
        />
        <Route
          path="/seccion3"
          element={
            <Seccion
              title="Contacto"
              description="Si tienes preguntas, no dudes en contactarnos. Alumno de la facultad de Informatica grupo 2-1."
              additionalText="Estamos disponibles para responder cualquier consulta que tengas."
            />
          }
        />
        <Route
          path="/formulario"
          element={<Formulario />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



