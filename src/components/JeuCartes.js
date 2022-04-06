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
            cartes: [],
            remaining: null
        };
    }

    async componentDidMount () {      // On récupère le deck_id une fois le composant chargé
        let deckResponse = await axios.get(API_JEU_CARTES);
        this.setState( { deck: deckResponse.data } );
    }

    retrieveCarte = async () => {

        if (this.state.remaining === 0) {
            alert("Il ne reste plus de cartes dans la pioche !");
            return;
        }

        let API_NEW_CAR_URL = `${API_CARTES}${this.state.deck.deck_id}/draw/`;
        // console.log(API_NEW_CAR_URL);
        let responseCard = await axios.get(API_NEW_CAR_URL);
        // console.log(responseCard);
        // console.log("remaining cards: ",responseCard.data.remaining);

        // this.setState( { cartes: [...this.state.cartes, responseCard.data.cards[0]] });
        this.setState( (prevState) => ( { cartes: [...prevState.cartes, responseCard.data.cards[0]], remaining: responseCard.data.remaining }));
        // console.log("remaining cards: ",this.state.remaining);

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