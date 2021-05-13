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

    return(
        <>
            <BrowserRouter>
                <Top />
			<Switch>
				<Route path="/" exact>
                    <Movies />
				</Route>
                <Route path="/sessions/:movieId" exact>
                    <Sessions />
				</Route>
                <Route path="/seats/:sessionsId" exact>
                    <Seats typedName = {typedName} setTypedName = {setTypedName}
                        typedCPF = {typedCPF} setTypedCPF = {setTypedCPF}
                    />
				</Route>
                <Route path="/Order" exact>
                    <Order typedName = {typedName} typedCPF = {typedCPF} />
				</Route>
			</Switch>
		    </BrowserRouter>
           
        </>
     
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));