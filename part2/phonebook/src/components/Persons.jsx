const Persons = ({persons}) => {
  return (
    <div>
      {persons.map(person => {
        const { name, number } = person

        return (
          <div key={name}>
            {name} {number}
          </div>
        )
      })}
    </div>
  )
}

export default Persons
