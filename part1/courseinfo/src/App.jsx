import Header from "./Header"
import Part from "./Part"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Part
        exercise={exercises1}
        part={part1}
      />
      <Part
        exercise={exercises2}
        part={part2}
      />
      <Part
        exercise={exercises3}
        part={part3}
      />
      <Total total={total}/>
    </div>
  )
}

export default App
