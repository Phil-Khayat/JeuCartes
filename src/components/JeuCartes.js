import React, { Component } from "react";
import axios from "axios";

const API_CARTES=`https://deckofcardsapi.com/api/deck/`
const API_JEU_CARTES=`${API_CARTES}new/shuffle/`;

class JeuCartes extends Component {

    constructor(){
        super();
        this.state = {
            deck: {},
        };
    }

    // async componentDidMount () {      // On récupère le deck_id une fois le composant chargé
    componentDidMount = async () => {      // On récupère le deck_id une fois le composant chargé
    

        let deckResponse = await axios.get(API_JEU_CARTES)
            // .then(function (response) {     // handle success
            // // console.log('RESPONSE: ',response);
            // })
            // .catch(function (error) {       // handle error
            //     console.log(error);
            // })
        ;

        this.setState( { deck: deckResponse.data } );

        // console.log (deckResponse.data);
        console.log (this.state.deck);
    }

    render() {
        return (
            <div>
            </div>
        );
    }

}

export default JeuCartes;