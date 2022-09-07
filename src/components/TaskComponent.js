import React from 'react';

const TaskComponent = (props) => {

  return (
    <div>
      <label>
        <img src = {props.task.icon} alt = {props.task.name}/>
        {props.task.name}
        {[...Array(props.task.numTimes)].map((e, i) => <input key={i} type="checkbox"/>)}
      </label>
    </div>
  );
}

export default TaskComponent;
