import { useState, useEffect } from "react"
import axios from 'axios';

export default function Movies(){
   // const [movie, setMovie] = useState([]);

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
    promisse.then((answer) => console.log(answer.data))
    }, []);

    //answer => {setMovie(resposta.data)}


    return(
        <div class="content">
            <div class="title"><p>Selecione um filme</p></div>

            <ul class="boxes">
                <li class="box" > 
                    <img src="posterbacurau.jpeg" />
                </li>
                <li class="box">
                    <img src="posterbacurau.jpeg" />
                </li>
                <li class="box" > 
                    <img src="posterbacurau.jpeg" />
                </li>
                <li class="box">
                    <img src="posterbacurau.jpeg" />
                </li>
            </ul>
        </div>
    )
}