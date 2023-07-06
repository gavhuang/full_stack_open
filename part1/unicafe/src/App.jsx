import { useState } from 'react'

const StatisticLine = ({statistic, text}) =>
  <p>{text} {statistic}{text == "positive" ? "%" : null}</p>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = ((good / all) * 100)

  return (
    good || neutral || bad
      ? <>
          <StatisticLine statistic={good} text={"good"} />
          <StatisticLine statistic={neutral} text={"neutral"} />
          <StatisticLine statistic={bad} text={"bad"} />
          <StatisticLine statistic={all} text={"all"} />
          <StatisticLine statistic={average} text={"average"} />
          <StatisticLine statistic={positive} text={"positive"} />
        </>
      : <p>No feedback given</p>
  )
}

const Button = ({onClick, text}) =>
  <button onClick={onClick}>{text}</button>


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text={"good"} />
      <Button onClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button onClick={() => setBad(bad + 1)} text={"bad"} />

      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </>
  )
}

export default App
