import Header from "./Header"
import Part from "./Part"
import Total from "./Total"

const Courses = ({ courses }) => {
  return (
    courses.map(course => {
      const { name, parts } = course

      return (
        <div>
          <Header name={name} />

          {parts.map(part => {
            const { id } = part

            return (
              <Part key={id} part={part} />
            )
          })}

          <Total course={course}/>
        </div>
      )
  }))
}

export default Courses
