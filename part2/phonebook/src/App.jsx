import { useState, useEffect } from 'react'
import phonebookService from '../services/phonebook'
import Filter from "./components/Filter"
import Persons from "./components/Persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  // Then chaining way instead of async/await (old way):
  /*
    phonebookService
      .getAll()
      .then((res) => setPersons(res.data))
  */

  // "await pauses the execution of the surround async function"
  const getPhonebook = async () => {
    const response = await phonebookService.getAll()
    const phonebook = await response.data
    setPersons(phonebook)
  }

  useEffect(() => getPhonebook, [])

  const doesNameExist = persons => persons.find(person => {
    const { name: nameInDB } = person

    if (name === nameInDB) {
      return true
    }
  })

  const handleOnNameChange = (e) => {
    setName(e.target.value)
  }

  const handleOnNumberChange = (e) => {
    setNumber(e.target.value)
  }

  // Here I could filter for the deleted entry or make a call to the DB
  // Hitting the DB in prod might not be good because $$$
  // So maybe it's better to handle it client-side
  const handleOnDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await phonebookService.deleteEntry(id)
      await getPhonebook()
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const newPerson = { name, number }

    if (doesNameExist(persons)) {
      alert(`${name} is already added to phonebook`)
      return
    }

    const response = await phonebookService.create(newPerson)
    const newPersonEntry = await response.data

    setPersons([...persons, newPersonEntry])
    setName('')
    setNumber('')
  }

  return (
    <div>
      <div>
        <h2>Phonebook</h2>

        <Filter
          name={name}
          number={number}
          handleOnSubmit={handleOnSubmit}
          handleOnNameChange={handleOnNameChange}
          handleOnNumberChange={handleOnNumberChange}
        />
      </div>

      <div>
        <h3>Numbers</h3>

        <Persons
          persons={persons}
          handleOnDelete={handleOnDelete}
        />
      </div>
    </div>
  )
}

export default App
