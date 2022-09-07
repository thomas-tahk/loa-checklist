const AddCharacter = () => {

  function addCharacter() {
    alert('New character added!');
  }

  return (
    <>
      <button onClick={addCharacter}>
        + Add Character
      </button>
    </>
  )
}

export default AddCharacter;
