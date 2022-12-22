import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card';
import {useContext, useState} from 'react';

function ItemList(props) {

    const[selectedCard, setSelectedCard] = useState(-1);

    const itemNames=[
        "hamburger",
        "pizza",
        "lahmacun",
    ];
    var cards = [
        <Card
            key="0"
            name="hamburger"
            selectCard={setSelectedCard} 
            selectedNo={selectedCard}
        />,
        <Card
            key="1"
            name="pizza"
            selectCard={setSelectedCard} 
            selectedNo={selectedCard}
        />,
        <Card
            key="2"
            name="lahmacun"
            selectCard={setSelectedCard} 
            selectedNo={selectedCard}
        />,
        <Card
            key="3"
            name="dürüm"
            selectCard={setSelectedCard} 
            selectedNo={selectedCard}
        />,
        <Card
            key="4"
            name="sufle"
            selectCard={setSelectedCard} 
            selectedNo={selectedCard}
        />,
    ];
  return (
    <div className='cardgrid--wrapper'>
        <div className='cardgrid--div'>
            {cards}
        </div>
    </div>
  )
}

ItemList.propTypes = {}

export default ItemList

