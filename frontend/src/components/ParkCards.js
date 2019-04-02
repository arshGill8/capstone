import React, { Component } from 'react';
import '../assets/styles/parkcard.scss'
import {Redirect} from 'react-router-dom'

class ParkCard extends Component {
render() { 
    if(!this.props.lots){
        console.log(this.props.lots)
        return  <Redirect to='/'></Redirect>
    }
    else{
        return (
            <div>
                <h1 className='card__header'>Locations</h1>
                <div className='card__holder'>
                {this.props.lots.map((each, key) => {
                    return (
                    <div className="card" key={key}>
                        <div className= 'card__info'>
                            <h2 className="card__title">{each.parkingspot}</h2>
                            <h3 className="card__number">{each.dist / 1000}km</h3>
                        </div>
                        <iframe className="card__map" src={each.map}></iframe>
                    </div>
                    )}
                )}
                </div>
            </div>
        );
    }
}
}

export default ParkCard;