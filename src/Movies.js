import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Movies(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
        request.then((answer) => {setMovies(answer.data)});
    }, []);

    return(
        <div className="content">
            <div className="section"><p>Selecione um filme</p></div>

            <ul className="boxes">
                {movies.map(movie =>(
                    <Link to="/sessions/:idFilme">
                        <li className="box" key={movie.id} > 
                            <img src={movie.posterURL} alt=""/>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}
