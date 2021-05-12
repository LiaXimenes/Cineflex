import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Top from "./Top.js"
import Movies from "./Movies";
import Sessions from "./Sessions";
import Seats from "./Seats";
import Order from "./Order";



function App(){
    return(
        <>
            <BrowserRouter>
                <Top />
			<Switch>
				<Route path="/" exact>
                    <Movies />
				</Route>
                <Route path="/sessions/:idFilme" exact>
                    <Sessions />
				</Route>
                <Route path="/seats/:idSessao" exact>
                    <Seats />
				</Route>
                <Route path="/Order" exact>
                    <Order />
				</Route>
			</Switch>
		    </BrowserRouter>
           
        </>
     
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));