import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState} from "react";

import Top from "./Top.js"
import Movies from "./Movies";
import Sessions from "./Sessions";
import Seats from "./Seats";
import Order from "./Order";



function App(){
    const [typedName, setTypedName] = useState([]);
    const [typedCPF, setTypedCPF] = useState([]);
    const [chosenSeat, setChosenSeat] = useState([]);

    const [movieName, setMovieName] = useState("");
    const [movieDate, setMovieDate] = useState("");
    const [movieHour, setMovieHour] = useState("");

   

    return(
        <>
            <BrowserRouter>
                <Top />
			<Switch>
				<Route path="/" exact>
                    <Movies />
				</Route>
                <Route path="/sessions/:movieId" exact>
                    <Sessions setMovieName = {setMovieName} />
				</Route>
                <Route path="/seats/:sessionsId" exact>
                    <Seats typedName = {typedName} setTypedName = {setTypedName}
                        typedCPF = {typedCPF} setTypedCPF = {setTypedCPF}
                        chosenSeat = {chosenSeat} setChosenSeat = {setChosenSeat}
                        setMovieHour = {setMovieHour} setMovieDate = {setMovieDate}
                    />
				</Route>
                <Route path="/Order" exact>
                    <Order typedName = {typedName} setTypedName={setTypedName}
                       typedCPF = {typedCPF} setTypedCPF={setTypedCPF}
                       chosenSeat = {chosenSeat} setChosenSeat = {setChosenSeat}
                       movieName = {movieName} movieDate = {movieDate} movieHour = {movieHour}
                    />
				</Route>
			</Switch>
		    </BrowserRouter>
           
        </>
     
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));