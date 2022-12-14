import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

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
      {/* <Title>
        Current Units
      </Title> */}
      {currentUnitList.length > 0 && <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.0 }}>
        <h2>Current Units</h2>
      </motion.div>}

      {currentUnitList ? currentUnitList.map((unit) => {return (
        <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.0 }}>
        <StyledItemsUL>
        <img styles={styles.img}src={require(`../assets/champions/${unit}.png`)} alt="searchImg" width="40"/>
          {unit}</StyledItemsUL>
      </motion.div>)}) : null}
    </SUContainer>
  )
}

const styles = {
  img: {
    marginRight: "5px"
  },
  text: {
    position: "relative",
    marginLeft: "10px"
  }
}

const SUContainer = styled.div`

  align-items: center;
`

const Title = styled.div`
  position: relative;
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
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
`;