import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Sessions(){
    const [infos, setInfos] = useState([]);
    const {movieId} = useParams("movieId");

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${movieId}/showtimes`)
        request.then((answer) => {setInfos(answer.data)});
    }, [])

    const {days = []} = infos;  


    return(
        <div className="content">
            <div className="section"><p>Selecione o Horário</p></div>

            {days.map(info => (
                
                <ul className="sessions">
                    <p>{info.weekday} - {info.date}</p>

                    {info.showtimes.map(sessions => ( 
                    <Link to={`/seats/${sessions.id}`}>
                        <li className="session" key={sessions.id}>{sessions.name}</li>
                    </Link>))
                    }
                </ul>
                
            ))}

            <div className="chosen-movie">
                <div className="chosen-movie-img"><img src={infos.posterURL} alt=""/></div>          
                    <p>{infos.title}</p>
                </div>
            </div>
    )
}