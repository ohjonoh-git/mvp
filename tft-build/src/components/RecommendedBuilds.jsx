import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {data} from '../assets/teams.js'


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
  text-align: left;
`

export default function RecommendedBuilds(props) {

  const [recommended, setRecommended] = useState([]);
  const [images, setImages] = useState('')


  useEffect( () => {
    setRecommended(props.currentUnitList);

    let choice = (Math.floor(Math.random() * 2) + 1);
    // async function getImages (data) {
    //   // get champions with the same traits
    console.log('choice', choice);
    console.log('dataaa', data[choice]);

    setRecommended(data[choice]);
  }, []);



  return (
    <SUContainer>
      <h2>Recommended units</h2>
      {recommended ?
        recommended.map((unit,i) => (
        <ChampList>
          <ul key={i} className="unitname">
          <Pic src={unit.img} width="50" styles={styles.img}/>
           {unit.name}</ul>
        </ChampList>
        ))
      : null}
    </SUContainer>
  )
}

const styles = {
  img: {
    padding: "5px"
  }
}