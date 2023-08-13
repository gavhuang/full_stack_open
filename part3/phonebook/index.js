const express = require("express")
const morgan = require("morgan")
const app = express()

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(express.json())
app.use(requestLogger) // If this middleware is not after express.json() middleware, the Body will be undefined.
app.use(morgan("tiny"))

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]

app.get('/api/persons', (_, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id) // Convert the ID from a string to number
  const person = persons.find(person => person.id === id)

  person ? response.json(person) : response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  /* Without the json-parser, the body property would be undefined.
  The json-parser functions so that it takes the JSON data of a request,
  transforms it into a JavaScript object and then attaches it to the
  body property of the request object before the route handler is called. */
  const body = request.body
  const generateId = () => Math.random() * 10000

  const newPerson = {
    id: generateId(),
    name: body.name,
    number: body.number,
  }

  const nameExists = persons.find(person => person.name === newPerson.name)

  if (!body.name && !body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  if (nameExists) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }

  persons = persons.concat(newPerson)

  response.json(newPerson)
})

app.get('/info', (_, response) => {
  const phonebookCapacity = persons.length
  const currentTime = new Date()
  response.send(
    `<p>Phonebook has info for ${phonebookCapacity}.</p>
    <p>${currentTime}</p>`
  )
})

app.get("*", (_, response) => response.send("No good!", 404))

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
