const Filter = ({
    name,
    number,
    handleOnSubmit,
    handleOnNameChange,
    handleOnNumberChange
  }) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        name: <input value={name} onChange={handleOnNameChange} />
      </div>
      <div>
        number: <input value={number} onChange={handleOnNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Filter