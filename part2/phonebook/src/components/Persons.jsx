const Persons = ({persons, handleOnDelete}) => {
  return (
    <div>
      {persons.map(person => {
        const { name, number, id } = person

        return (
          <div key={name}>
            {name} {number}
            <button onClick={() => handleOnDelete(id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Persons
