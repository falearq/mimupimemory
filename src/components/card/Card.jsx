import React from 'react'
import PropTypes from 'prop-types'
import Back from '../../img/back.png'
import styled from 'styled-components'

const FlipContainer = styled.div`
    perspective: 1000px;
    display:inline-block;
    border: 1px solid white;
    background:black;

`

export default function Card({
    disabled,
    handleClick, 
    id, 
    type, 
    flipped,
    solved,
    height, 
    width
}){
    return <FlipContainer
            className={`flip-container ${flipped ? 'flipped' : ''}`}
            style={{
                width,
                height
            }}
            onClick={() => handleClick(id)}>
                <div 
                 className='flipper'>
                        <img 
                         alt='Card'
                         style={{width,height}}
                         className={flipped ? 'front' : 'back'}
                         src={flipped ? `../../img/${type}.png` : `${Back}`}>
                        </img>
        </div>
    </FlipContainer>
}

Card.propTypes = {
    disabled: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    solved: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    
}