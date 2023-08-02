import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => {
  try {
    return await axios.get(baseUrl)
  } catch (err) {
    console.log(err.message)
  }
}

const create = async newObject => {
  try {
    return await axios.post(baseUrl, newObject)
  } catch (err) {
    alert("Entry could not be created!")
  }
}

const deleteEntry = async id => {
  try {
    await axios.delete(`${baseUrl}/${id}`)
  } catch (err) {
    alert("Entry could not be deleted!")
  }
}

export default { getAll, create, deleteEntry }
