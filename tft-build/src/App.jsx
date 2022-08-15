import React, {useState, useEffect} from 'react'
import Top from './components/Top'
import DoneButton from './components/buttons/DoneButton'
import ResetButton from './components/buttons/ResetButton'
import AutoCompleteSearch from './components/AutoCompleteSearch'
import SelectedUnits from './components/SelectedUnits'
import RecommendedBuilds from './components/RecommendedBuilds'
import styled from 'styled-components'
import useLocalStorage from 'use-local-storage'
import {motion} from "framer-motion"
import './App.css'


function App() {

  const [currentUnitList, setCurrentUnitsList] = useState([]);
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [champsList, setChampsList] = useState([]);
  const [done, setDone] = useState(false);


  useEffect(() => {

      fetch('http://localhost:3001/api/getUnits')
      .then((data) => data.json())
      .then((res) => {
        console.log('data', res);
        setChampsList(res.data);
      })
      .then(() => console.log('champs', champsList))
      .catch((err) => console.log('err', err));

  }, [])

  const switchMode = () => {
    const newMode = theme === 'light' ? 'dark' : 'light';
    setTheme(newMode);
  }

  return (
    <div className="app" data-theme={theme}>
      <Container>
      {/* <motion.div layout><button onClick={switchMode}>Switch to {theme}</button></motion.div> */}
        <Wrapper1>
          <SelectedUnits currentUnitList={currentUnitList}/>
        </Wrapper1>
        <MiddleContainer>
          <Top/>

          <AutoCompleteSearch setList={setCurrentUnitsList} list={currentUnitList} allChamps={champsList}/>
          <DoneButton setDone={setDone}/>
          <ResetButton setCurrentUnitsList={setCurrentUnitsList} setDone={setDone}/>
        </MiddleContainer>
        <Wrapper3>
          {done && <RecommendedBuilds champsList={champsList} currentUnitList={currentUnitList}/>}
        </Wrapper3>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`
const Wrapper1 = styled.div`

  flex-flow: column;

`
const MiddleContainer = styled.div`
  display: flex;
  align-self: center;
  min-width: 800px;
  flex-flow: column;
  justify-content: space-around;
  align-items:center;
`
const Wrapper3 = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;
`

export default App;
