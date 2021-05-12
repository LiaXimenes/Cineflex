import { Link } from "react-router-dom";

export default function Order(){
    return(
        <>
            <div>
                <p className="sucessfull-order">Pedido feito <br/>com sucesso!</p>
            </div>

            <div className="final-info">
                <p><strong>Filme e Sessão</strong></p>
                <ul>
                <li>Bacurau</li>
                <li>26/05/2022</li>
                </ul>
            </div>

            <div className="final-info">
                <p><strong>Ingressos</strong></p>
                <ul>
                <li>Assento 25</li>
                <li>Assento 26</li>
                </ul>
            </div>

            <div className="final-info">
                <p><strong>Comprador</strong></p>
                <ul>
                <li>Nome: Lia Ximenes</li>
                <li>CPF: 257.000.000</li>
                </ul>
            </div>

            <Link to="/">
                <button className="button-style">Voltar para Home</button>
            </Link>
           
      </>
    )
}