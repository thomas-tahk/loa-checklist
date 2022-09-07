import React from 'react';

const TaskComponent = ({task}) => {

  return (
    <div>
      <label>
        <img src = {task.icon} alt = {task.name}/>
        {task.name}
        {[...Array(task.numTimes)].map((e, i) => <input key={i} type="checkbox"/>)}
      </label>
    </div>
  );
}

export default TaskComponent;
