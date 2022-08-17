import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {motion} from 'framer-motion'


const options = ['test', 'test2']

export default function Top() {

  const [searchEntry, setSearchEntry] = useState('');
  const [value, setValue] = useState('');

  return (
    <TopContainer>
      <motion.button
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.9 }}>
          <h1>MORT PLEASE</h1>
      </motion.button>


    </TopContainer>
  )
}


const TopContainer = styled.div`
  padding-top: 50%;

`