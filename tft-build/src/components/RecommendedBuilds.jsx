import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {data} from '../assets/teams.js'
import {motion} from 'framer-motion'


const SUContainer = styled.div`
  order: 1;
  padding: 50%;
  align-content: flex-start;

  .unitname {
  }
`
const ChampList = styled.div`

`
const Pic = styled.img`
`

export default function RecommendedBuilds(props) {

  const [recommended, setRecommended] = useState([]);
  const [images, setImages] = useState('')


  useEffect( () => {
    setRecommended(props.currentUnitList);

    let choice = (Math.floor(Math.random() * 3) + 1);
    // async function getImages (data) {
    //   // get champions with the same traits
    console.log('choice', choice);
    console.log('dataaa', data[choice]);

    setRecommended(data[choice]);
  }, []);



  return (
    <SUContainer>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.0 }}>
        <h2 style={{textAlign: 'center'}}>Final Units</h2>
      </motion.div>
      {recommended ?
        recommended.map((unit,i) => (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0 }}>
          <ChampList>
            <ul style={styles.list} key={i} className="unitname">
            <Pic src={unit.img} width="50" style={styles.img}/>
            <text style={styles.text}>{unit.name}</text></ul>
          </ChampList>
        </motion.div>
        ))
      : null}
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