import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
    
  return (
    <div className='card--div'>
        {(props.selectedNo !== props.name) && <button className='card--div-button' onClick={() => props.selectCard(props.name)}>
            {props.name}
        </button>}
        {(props.selectedNo === props.name) && <button className='card--div-button-selected' onClick={() => props.selectCard(-1)}>
            {props.name}
        </button>}
    </div>
  )
}

Card.propTypes = {}

export default Card
