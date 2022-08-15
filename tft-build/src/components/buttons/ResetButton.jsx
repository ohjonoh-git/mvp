import React, {useState} from 'react';

export default function ResetButton (props) {

  const [isHidden, setIsHidden] = useState(false);

  const resetAll = () => {
    props.setCurrentUnitsList([]);
    props.setDone(false);
  }
  return (
    <div>
        <button onClick={() => resetAll()}>Reset</button>
        {!isHidden && props.text}
    </div>
  )

}