import React, { Component } from 'react';
import './Card.css'
import FlipCard from 'react-flipcard';


export default class Card extends Component {
    render() {
        return (
            <div className="card" onClick={this.props.selectCard}>
                <FlipCard
                    flipped={this.props.isBeenCompared || this.props.wasGuessed}
                    disabled={true}
                >
                    <div className="cover"></div>
                    <div className="content">
                    
                        <img src={this.props.icon} alt={''} />
                     
                    </div>

                </FlipCard>

            </div>
        )
    }
}