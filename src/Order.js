import { Link } from "react-router-dom";

export default function Order({typedName, typedCPF, setTypedName, setTypedCPF, chosenSeat, setChosenSeat, movieName, movieDate, movieHour}){
    return(
        <>
            <div>
                <p className="sucessfull-order">Pedido feito <br/>com sucesso!</p>
            </div>

            <div className="final-info">
                <p><strong>Filme e Sessão</strong></p>
                <ul>
                <li>{movieName}</li>
                <li>{movieDate} - {movieHour}</li>
                </ul>
            </div>

            <div className="final-info">
                <p><strong>Ingressos</strong></p>
                <ul>
                    {chosenSeat.map(seat => (<li>Assento {seat}</li>) )}
                </ul>
            </div>

            <div className="final-info">
                <p><strong>Comprador</strong></p>
                <ul>
                <li>Nome: {typedName}</li>
                <li>CPF: {typedCPF}</li>
                </ul>
            </div>

            <Link to="/">
                <button className="button-style" onClick = {() => {setTypedName(""); setTypedCPF(""); setChosenSeat("")}}>Voltar para Home</button>
            </Link>
      </>
    )
}