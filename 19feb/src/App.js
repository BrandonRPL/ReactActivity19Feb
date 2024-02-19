import logo from './logo.svg';
import './App.css';
import  Perfil  from "./components/perfil";
import { useState } from "react";

function App() {
 /* const [perfiles, setNombre] = useState(
    {
      nombre: 'dani'
    },
    {
      nombre: 'asd'
    }
  );

  return (
    perfiles.forEach(nombre => {
      <div className="App">
      <div className='contenedor-principal'>
        <h1>mis desarrolladores favoritos: {nombre}</h1>
          
      </div>
    </div>
    })

  );*/
  return (
    <div className="App">
      <div className='contenedor-principal' class="flex-container">
        <h1>mis desarrolladores favoritos: </h1>
        
        <Perfil
          nombre='Brais '
          pais='España'
          imagen='mou'
          cargo='ing. software'
          empresa='moureDev'
          perfil='es un youtuber explica muy bien sobre nuevas tecnologias'
          linked='https://www.linkedin.com/in/braismoure/?originalSubdomain=es'
          youtube='https://www.youtube.com/@mouredev'
          webSite='https://mouredev.com'
        />
        <Perfil
          nombre='fatz '
          pais='peru'
          imagen='fatz'
          cargo='ing. software'
          empresa='fatz'
          perfil='es un youtuber que da consejos sobre tecnologias modernas'
          linked='https://www.linkedin.com/company/fazttech/?originalSubdomain=pe'
          youtube='https://www.youtube.com/channel/UCX9NJ471o7Wie1DQe94RVIg'
          webSite='https://www.faztweb.com'
        />
        <Perfil
          nombre='diego velazquez '
          pais='peru'
          imagen='diego'
          cargo='ing. software'
          empresa='diegoveloper'
          perfil='es un youtuber que muestra tecnologias a la vanguardia'
          linked='https://www.linkedin.com/in/diegoveloper/?locale=es_ES'
          youtube='https://www.youtube.com/c/diegoveloper'
          webSite='https://www.diegoveloper.com'
        />
      </div>
    </div>
  );
  
}

export default App;
