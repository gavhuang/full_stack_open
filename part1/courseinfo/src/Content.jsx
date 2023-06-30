import Part from "./Part"

const Content = ({course}) => {
  const { parts } = course

  return (
    <>
      {parts.map(({ exercises, name }, key) => {
        return (
          <Part
            exercises={exercises}
            key={key}
            name={name}
          />
        )
      })}
    </>
  )
}

export default Content
