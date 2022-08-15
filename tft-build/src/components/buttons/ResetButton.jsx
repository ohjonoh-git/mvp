import React, {useState} from 'react';

export default function ResetButton (props) {

  const [isHidden, setIsHidden] = useState(false);


  return (
    <div>
        <button onClick={() => props.setCurrentUnitsList([])}>Reset</button>
        {!isHidden && props.text}
    </div>
  )

}