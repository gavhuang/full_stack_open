import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const getPeopleFromDatabase = async () => await axios.get("../db.json")

  useEffect(() => {
    getPeopleFromDatabase()
      .then(res => {
        const { persons } = res.data
        setPersons(persons)
      })
  }, [])

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
