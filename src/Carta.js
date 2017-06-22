import React, {Component} from 'react';
import './Carta.css'
import FlipCard from 'react-flipcard';


export default class Carta extends Component{
    render(){
        return(
           <div className="carta" onClick={this.props.seleccionarCarta}>
                <FlipCard
                     flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
                     disabled={true}
                  >
                    <div className="portada"></div>
                    <div className="contenido">
                        <ul>    
                            <li><image src={'./images/bull.jpg'}></image></li>
                        </ul>
                    </div>

                </FlipCard>

            </div>
        )
    }
}