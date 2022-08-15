import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


export default function AutoCompleteSearch (props) {
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState('');

  // useEffect(() => {
  //   console.log('suggestststs', suggestions);
  // }, [suggestions])

  const onTextChanged = (e) => {
    const value = e.target.value;
    let suggest = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      const list = props.allChamps;
      suggest = list.sort().filter(v => regex.test(v.name))
      setSuggestions(suggest);
    }
    setSuggestions(suggest)
    setText(value)
    // value.length === 0 ? () => setSuggestions([]) :
  }

  const suggestionSelected = (value) => {
    // set it empty cause we want to reset the list after a user selects an item
    setText('');
    props.setList((prevArr) => ([...prevArr, value]));
    setSuggestions([]);
  }

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    } else {
      console.log('SUGGESTIONS', suggestions);
      return (
        <div>
          {suggestions.map((unit, i) => (<ul style={styles.suggest} key={i} onClick={() =>
          suggestionSelected(unit.name)}>
          <img width="40" src={require(`../assets/champions/${unit.name}.png`)} alt="searchImg" />
          {unit.name}
          </ul>))}
        </div>
      )
    }
  }

  return (
    <>
    <Container>
      <Wrapper>
          <TextInput type="text" onChange={onTextChanged} value={text}/>
          {renderSuggestions()}
        </Wrapper>
    </Container>
    </>
  )
}

const styles = {
  suggest: {
    position: "relative",
    left: "0%"
  },
  img: {
    marginRight: "10px",
    width: "5px",
    height: "10px",
    border: "2px solid #C0C0C0",
    padding: "5px"
  }
}

const Container = styled.div`

`
const Wrapper = styled.div`

  width: 100%;
  border: 1px solid grey;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 2px 4px 1px rgba(0,0,0,.18);
  font-family: 'Gotham Black', sans-serif;
  font-size: 14px;
  color: black;
  margin: 150px auto 0 auto;
`
const TextInput = styled.input`
  width: 100%;
  border: none;
  font-family: 'Gotham Black', sans-serif;
  font-size: 14px;
  color: black;
`
