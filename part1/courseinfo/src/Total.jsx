const Total = ({ course }) => {
  const { parts } = course
  let total = 0

  parts.forEach(part => {
    let { exercises } = part
    total += exercises
  })

  return (
    <p>Number of exercises {total}</p>
  )
}

export default Total
