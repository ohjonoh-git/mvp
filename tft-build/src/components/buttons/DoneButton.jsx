import React, {useState} from 'react';

export default function DoneButton (props) {

  const [isHidden, setIsHidden] = useState(false);


  return (
    <div style={styles.button}>
        <button onClick={() => props.setDone(true)}>Done</button>
        {!isHidden && props.text}
    </div>
  )

}

const styles = {
  button: {
    paddingTop: 10,
    paddingBottom: 10
  }
}