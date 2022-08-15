import React, {useState, useEffect} from 'react';
import styled from 'styled-components'


const options = ['test', 'test2']

export default function Top() {

  const [searchEntry, setSearchEntry] = useState('');
  const [value, setValue] = useState('');

  return (
    <TopContainer>
            <h1>MORT PLEASE</h1>
    </TopContainer>
  )
}

const TopContainer = styled.div`
  padding-top: 50%;
`