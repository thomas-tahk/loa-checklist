import React from 'react';
import DailyCharacterTask from './components/DailyCharacterTask';

function addCharacter() {
  alert('New character added!');
}

function App() {
  return (
    <>
      <button onClick={addCharacter}>
        + Add Character
      </button>
      <DailyCharacterTask />
    </>
  );
}

export default App;
