import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

export default function SelectedUnits({currentUnitList}) {

  const [currentUnits, setCurrentUnits] = useState('');

  // useEffect(() => {
  //   setCurrentUnits(currentUnitList);
  // }, [currentUnitList]);
  // display selected units

  // with current List
  // show image
  return (
    <SUContainer>
      <Title>
        Current Units
      </Title>
      {currentUnitList ? currentUnitList.map((unit) => {return (<StyledItemsUL>{unit}</StyledItemsUL>)}) : null}
    </SUContainer>
  )
}

const SUContainer = styled.div`


  align-items: center;
`

const Title = styled.div`
  position: relative;
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  background: gold;
  top: 0px;
  left: 8%;
  @keyframes slidein {
  from {
    margin-right: 100%;

  }

  to {
    margin-right: 0%;
  }
}
`

const StyledItemsUL = styled.ul`
  position: relative;
  top: 5%;
  left: 5%;
  background: yellow;
`;