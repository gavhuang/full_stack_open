import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  try {
    return axios.get(baseUrl)
  } catch (err) {
    console.log(err.message)
  }
}

const create = newObject => {
  try {
    return axios.post(baseUrl, newObject)
  } catch (err) {
    alert("Entry could not be created!")
  }
}

const deleteEntry = id => {
  try {
    return axios.delete(`${baseUrl}/${id}`)
  } catch (err) {
    alert("Entry could not be deleted!")
  }
}

export default { getAll, create, deleteEntry }
