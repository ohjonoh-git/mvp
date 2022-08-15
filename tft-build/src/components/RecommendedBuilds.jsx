import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {data} from '../assets/teams.js'


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
    // }
    // const traitsList = [];
    // (props.currentUnitList).forEach(unit => {
    //   unit.traits.forEach(trait => {
    //     if (!traitsList.includes(trait)) {
    //       traitsList.push(trait);
    //     }
    //   })
    // })

    // const recList = [];
    //props.currentUnitList
    // if the champion has this trait
      //
    //getImages(recommended);
  }, []);



  return (
    <SUContainer>
      <h2>Recommended units</h2>
      {recommended ?
        recommended.map(unit => (
        <>
          <ul>{unit.name}</ul>
          <img src={unit.img}/>
        </>
        ))
      : null}
    </SUContainer>
  )
}

const SUContainer = styled.div`
  order: 1;
  padding: 50%;
  align-content: flex-start;
`