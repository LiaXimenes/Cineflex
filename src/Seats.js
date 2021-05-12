import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


export default function Seats(){
    const [infos, setInfos] = useState([]);
    const {idAssento} = useParams();

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idAssento}/seats`)
        request.then((answer) => {setInfos(answer.data)});
    }, [])
    

    return(
        <div className="content">
            <div className="section"><p>Selecione o(s) assento(s)</p></div>
            
            <ul className="seats">

                {infos.map(info => {
                    <li className="little-balls"  key={info.seats.id}>{info.seats.name}</li>
                })}
                
            </ul>

            <div className="example">
                <div>
                    <li className="little-balls green"></li>
                    <p>Selecionado</p>
                </div>
                <div>
                    <li className="little-balls"></li>
                    <p>Disponível</p>
                </div>   <div>
                    <li className="little-balls yellow"></li>
                    <p>Indisponível</p>
                </div>
            </div>

            <div className="inputs">
                <p>Nome do Comprador:</p>
                <input type="text" placeholder="Digite seu nome..." />


                <p>CPF do Comprador:</p>
                <input type="text" placeholder="Digite seu CPF..." />
            </div>

            <Link to="/Order">
                <button className="button-style">Reservar assento(s)</button>
            </Link>
            
            <div className="chosen-movie" key={infos.id}>
                <div className="chosen-movie-img"><img src={infos.movie.posterURl} alt=" " /></div>          
                <p>{infos.movie.title}<br/>{infos.day.weekday} - {infos.name}</p>
            </div>     
        </div>
    )
}