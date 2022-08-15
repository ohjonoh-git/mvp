import React, {useState, useEffect} from 'react'
import Top from './components/Top'
import DoneButton from './components/buttons/DoneButton'
import ResetButton from './components/buttons/ResetButton'
import AutoCompleteText from './components/AutoCompleteText'
import SelectedUnits from './components/SelectedUnits'
import RecommendedBuilds from './components/RecommendedBuilds'
import styled from 'styled-components'
import axios from 'axios';

function App() {

  const [currentUnitList, setCurrentUnitsList] = useState([]);
  const [showCurrentList, setShowCurrentList] = useState(false);
  const [showBuildSuggestions, setShowBuildSuggestions] = useState(false);
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

  return (
      <Container>
        <Wrapper1>
          <SelectedUnits currentUnitList={currentUnitList}/>
        </Wrapper1>
        <MiddleContainer>
          <Top/>

          <AutoCompleteText setList={setCurrentUnitsList} list={currentUnitList} allChamps={champsList}/>
          <DoneButton text='Done' setDone={setDone}/>
          <ResetButton setCurrentUnitsList={setCurrentUnitsList}/>
        </MiddleContainer>
        <Wrapper3>
          {done && <RecommendedBuilds champsList={champsList} currentUnitList={currentUnitList}/>}
        </Wrapper3>
      </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const Wrapper1 = styled.div`
  flex: .25;
  flex-flow: column;
  order: 1;
`
const MiddleContainer = styled.div`
  display: flex;
  flex: .5;
  order: 2;
  flex-flow: column;
  background-color: grey;

  align-items:center;
`
const Wrapper3 = styled.div`
  display: flex;
  flex: .25;
  order: 3;
  flex-flow: column;
  align-items: center;
`

export default App;
