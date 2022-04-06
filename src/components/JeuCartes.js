import React, { Component } from "react";
import axios from "axios";
import Carte from './Carte';
import '../css/JeuCartes.css';

const API_CARTES=`https://deckofcardsapi.com/api/deck/`
const API_JEU_CARTES=`${API_CARTES}new/shuffle/`;


class JeuCartes extends Component {

    constructor(){
        super();
        this.state = {
            deck: {},
            cartes: []
        };
    }

    async componentDidMount () {      // On récupère le deck_id une fois le composant chargé
        let deckResponse = await axios.get(API_JEU_CARTES);
        this.setState( { deck: deckResponse.data } );
    }

    retrieveCarte = async () => {
        let API_NEW_CAR_URL = `${API_CARTES}${this.state.deck.deck_id}/draw/`;
        // console.log(API_NEW_CAR_URL);
        let responseCard = await axios.get(API_NEW_CAR_URL);
        // console.log(responseCard);

        // this.setState( { cartes: [...this.state.cartes, responseCard.data.cards[0]] });
        this.setState( (prevState) => ( { cartes: [...prevState.cartes, responseCard.data.cards[0]] }));
        // console.log(this.state.cartes);
    }

    render() {
        // let cartes = this.state.cartes.map( (c) => <Carte key={c.code} carte={c}/>)
        let cartes = this.state.cartes.map( (c) => <Carte key={c.code} img={c.image}/>)
        return (
            <div>
                <button className="buttonClass" onClick={this.retrieveCarte}>Récupérer une carte</button>
                <div>{cartes}</div>
            </div>
        );
    }

}

export default JeuCartes;