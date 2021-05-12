import ReactDOM from 'react-dom';

import Movies from "./Movies";
import Sessions from "./Movies";
import Seats from "./Movies";
import Order from "./Order";



function App(){
    return(
        <>
            <div class= "top">
                <p>CINEFLEX</p>
            </div>
            <Movies />
            <Sessions />
            <Seats />
            <Order />
        </>
     
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));