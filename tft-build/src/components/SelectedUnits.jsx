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
        <h2 style={{textAlign: 'center'}}>Current Units</h2>
      </motion.div>}

      {currentUnitList ? currentUnitList.map((unit) => {return (
        <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.0 }}>
        <ul style={styles.list}>
        <img style={styles.img} src={require(`../assets/champions/${unit}.png`)} alt="searchImg"/>
         <text style={styles.text}>{unit}</text></ul>
      </motion.div>)}) : null}
    </SUContainer>
  )
}

const styles = {
  list: {
    verticalAlign: 'middle',
    width: 150
  },
  img: {
    width: 50,
    textAlgin: 'left'
  },
  text: {
    position: "relative",
    marginLeft: "10px",
    float: "right"
  }
}

const SUContainer = styled.div`
  order: 1;
  padding: 50%;
  align-content: flex-start;
`


const StyledItemsUL = styled.ul`

`;