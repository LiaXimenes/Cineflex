export default function Seats(){
    return(
        <div class="content">
            <div class="title"><p>Selecione o(s) assento(s)</p></div>
            
            <ul class="seats">
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
                <li class="little-balls">01</li>
            </ul>


            <div class="example">
            <div>
                <li class="little-balls green"></li>
                <p>Selecionado</p>
            </div>
            <div>
                <li class="little-balls"></li>
                <p>Disponível</p>
            </div>   <div>
                <li class="little-balls yellow"></li>
                <p>Indisponível</p>
            </div>
            </div>

            <div class="inputs">
                <p>Nome do Comprador:</p>
                <input type="text" placeholder="Digite seu nome..." />


                <p>CPF do Comprador:</p>
                <input type="text" placeholder="Digite seu CPF..." />
            </div>

            <button class="button-style">Reservar assento(s)</button>

            <div class="chosen-movie">
                <div class="chosen-movie-img"><img src="posterbacurau.jpeg" /></div>          
                <p>Bacurau<br/>Quinta-Feira - 21:21</p>
            </div>     
        </div>
    )
}