import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl)

const create = newObject => {
  return axios
    .post(baseUrl, newObject)
    .catch(alert("Entry could not be created!"))
}

const deleteEntry = id => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .catch(alert("Entry could not be deleted!"))
}

export default { getAll, create, deleteEntry }
