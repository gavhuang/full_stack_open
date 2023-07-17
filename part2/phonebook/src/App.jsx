import { useState } from 'react'
import Filter from "./components/Filter"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')

  const doesNameExist = persons => persons.find(person => {
    const { name } = person

    if (newName === name) {
      return true
    }
  })

  const handleOnNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleOnNumberChange = (e) => {
    setNumber(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (doesNameExist(persons)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    setPersons([
      ...persons,
      {name: newName, number: number}
    ])
    setNewName('')
    setNumber('')
  }

  return (
    <div>
      <div>
        <h2>Phonebook</h2>

        <Filter
          name={newName}
          number={number}
          handleOnSubmit={handleOnSubmit}
          handleOnNameChange={handleOnNameChange}
          handleOnNumberChange={handleOnNumberChange}
        />
      </div>

      <div>
        <h3>Numbers</h3>

        <Persons persons={persons} />
      </div>
    </div>
  )
}

export default App
