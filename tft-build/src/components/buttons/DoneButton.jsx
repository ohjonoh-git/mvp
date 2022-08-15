import React, {useState} from 'react';

export default function DoneButton (props) {

  const [isHidden, setIsHidden] = useState(false);


  return (
    <div>
        <button onClick={() => props.setDone(true)}>Done</button>
        {!isHidden && props.text}
    </div>
  )

}