import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function Filmes() {

    const[filmes, setFilmes] = useState([])

    const apiKey= 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    useEffect( ()  => {

          fetch(`${urlBase}popular?${apiKey}`)
          .then(response => response.json())
          .then(response => setFilmes(response.results))
          .catch(erro => console.log(erro))


    },[])

return ( 
    <>        
    <h1>Filmes populares</h1>
    <div className="ListadeFilmes grid grid-cols-3 gap-3 w-[1200px]">
        {
            filmes.map(
                filme => (
                <div className="card-filme text-center" key={filme.id}>
                     <img className="w=auto" src={`${urlImg}${filme.poster_path}`}/> 
                     <h1>{filme.title}</h1>
                     <Link to={`${filme.id}`} className="bg-blue-500">Saber mais</Link>
                </div>
                
            ))
    }
    </div>
    </>
     );
}

export default Filmes;