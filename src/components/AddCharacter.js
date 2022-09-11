const AddCharacter = () => {

  function addCharacter() {
    alert('New character added!');
    // update with modal code later
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
