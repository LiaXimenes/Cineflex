import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Sessions(){
    const [infos, setInfos] = useState([]);
    const {idSessao} = useParams();

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idSessao}/showtimes`)
        request.then((answer) => {setInfos(answer.data)});
    }, [])

    
    return(
        <div className="content">
            <div className="section"><p>Selecione o Horário</p></div>

            {infos.map(info => (
                <>
                    <ul className="sessions">
                        <p>{info.days.weekday} - {info.days.date} key={info.days.id}</p>
                        <Link to="/Order">
                            <li className="session" key={info.days.showtime.id}>{info.days.showtime.name}</li>
                        </Link>
                    </ul>

                    <div className="chosen-movie">
                        <div className="chosen-movie-img"><img src={info.posterURL} alt=""/></div>          
                        <p>{info.title} key={info.id}</p>
                    </div>
                </>

            ))}

        </div>
    )
}