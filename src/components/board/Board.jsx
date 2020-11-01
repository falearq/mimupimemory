import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card/Card'
import styled from 'styled-components'

const BoardWrapper = styled.div`
    margin: 0;
    padding:0;
`

export default function Board({
    
    cards,
    flipped,
    handleClick,
    type,
    disabled,
    dimension,
    solved,
    
}){
    return (  
        <BoardWrapper>
        { cards.map((card) => (
          <Card
          key={card.id}
          id={card.id}
          type={card.type}
          width={dimension / 4.5}
          height={dimension / 4.5}
          flipped={flipped.includes(card.id)}
          back={card.back}
          front={card.front}
          handleClick={handleClick}
          disabled={disabled}
          solved={solved.includes(card.id)}
          />   
        ))}
    </BoardWrapper>

    )

}

Board.propTypes = {
    disabled:  PropTypes.bool.isRequired,
    dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
}
