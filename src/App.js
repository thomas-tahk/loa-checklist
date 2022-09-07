import React from 'react';

// import AddCharacter from './components/AddCharacter';
// import Minimum from './components/Minimum';
import Tasks from './components/Tasks';
import TaskComponent from './components/TaskComponent';

function App() {
  return (
    <>
      {Tasks.map(task =>
        <TaskComponent key={task.name} task={task}/>
      )}
    </>
  );
}

export default App;
