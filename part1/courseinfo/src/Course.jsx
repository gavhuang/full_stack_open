import Header from "./Header"
import Part from "./Part"
import Total from "./Total"

const Course = ({ course }) => {
  const { name, parts } = course

  return (
    <>
      <Header name={name} />

      {parts.map(part => {
        const { id } = part

        return (
          <Part key={id} part={part} />
        )
      })}

      <Total course={course}/>
    </>
  )
}

export default Course
