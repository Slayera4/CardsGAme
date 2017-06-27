import React,{Component} from 'react';
import './Table.css'
import Card from './Card'

export default class Table extends Component{
    render(){
        return(
         <div className="table">
             {
                 this.props.Deck.map((card, index) => {
                        const isBeenCompared = this.props.SelectedCouple.indexOf(card) > -1;
                     return <Card 
                key = {index} 
                icon = {card.icon}
                isBeenCompared = {isBeenCompared}
                selectCard={() => this.props.selectCard(card)}
                wasGuessed={card.wasGuessed}
                     />;})
             }
         </div>   
        )
    }
}