import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function Seats({setMovieDate, setMovieHour, typedName, setTypedName, typedCPF, setTypedCPF, chosenSeat, setChosenSeat}){
    const [infos, setInfos] = useState([]);
    const {sessionsId} = useParams("sessionsId");


    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionsId}/seats`)
        request.then((answer) => {setInfos(answer.data)});
    }, [])

    if(infos.length === 0){
        return <div></div>;
    }
    setMovieDate(infos.day.weekday);
    setMovieHour(infos.name);
    

    return(

        <div className="content">
            <div className="section"><p>Selecione o(s) assento(s)</p></div>
            
            <ul className="seats">

               {infos.seats.map(info => (
                    <li className={`little-balls ${info.isAvailable ? "" : "yellow"}`} key={info.id}
                     onClick={(event) => {chooseSeat(info.isAvailable, event, info.id)}}>
                        {info.name}
                    </li>
                ))}
                
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
                <input type="text" 
                    placeholder="Digite seu nome..." 
                    onChange={(event) => setTypedName(event.target.value)} 
                    value = {typedName}
                />


                <p>CPF do Comprador:</p>
                <input type="text" 
                    placeholder="Digite seu CPF..."
                    onChange={(event) => setTypedCPF(event.target.value)} 
                    value = {typedCPF}
                />

            </div>

            <Link to="/Order">
                <button className="button-style" onClick={sendToServer}>Reservar assento(s)</button>
            </Link>
            
            
            <div className="chosen-movie" key={infos.id}>
                <div className="chosen-movie-img">
                    <img src={infos.movie.posterURL} alt=" " />
                </div>          
                <p>{infos.movie.title}<br/>{infos.day.weekday} - {infos.name}</p>
            </div> 
            
                
        </div>
    )

    function chooseSeat(isAvailable,event,id){
        if(!isAvailable){
            alert("assento indisponível");
        }else {event.target.classList.toggle("green");
                setChosenSeat([... chosenSeat, id]);
            }
    }



    function sendToServer(){
        const infosToServer = 
        {
            ids: chosenSeat,
            name: typedName,
            cpf: typedCPF,
        }
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many", infosToServer);
     
    }
     
}