import React, {useState} from 'react';

const TaskComponent = ({task}) => {
  const [showStatus, setShowStatus] = useState(true);
  const buttonText = showStatus ? 'hide':'show';

  return (
    <div>
      {
        showStatus ?
        <label>
          <img src = {task.icon} alt = {task.name}/>
          {task.name}
          {[...Array(task.numTimes)].map((e, i) => <input key={i} type="checkbox"/>)}
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
  );
}

export default TaskComponent;
