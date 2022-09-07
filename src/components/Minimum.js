import React,{useState} from 'react';

const Minimum = () => {
  const [showStatus, setShowStatus] = useState(true);
  const buttonText = showStatus ? 'hide':'show'

  return (
    <>
      <div>
        {
          showStatus ?
          <label>
            <img src="../img/yoinked_images/chaosdungeon_icon.png" alt="chaos dungeon icon"/>
            <input type="text" placeholder="Chaos Dungeon"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
          </label>
          :null
        }

        <button onClick={()=> {
          setShowStatus(!showStatus);
        }
        }>
          {buttonText}
        </button>
      </div>
    </>
  );
}

export default Minimum;
