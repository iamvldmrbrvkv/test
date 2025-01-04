import { data } from "../mocks/data/data"

export const Test = () => {
  let randomQuestion = Math.floor(Math.random() * data.length)
  const shuffledAnswers = data[randomQuestion].answers.toSorted(() => Math.random() - 0.5)
  
  const getData = async () => {
    const endpoint = "/data"
    try {
      const response = await fetch(endpoint)
      if (response.ok) {
        const data = await response.json()
        console.log(data)
      } else {
        throw new Error("Request failed")
      }
    } catch (error) {
      console.error(error)
    }
  }
  getData()
  return (
    <div className="test">
      <h1>Тестирование</h1>
      {!data[randomQuestion].answered ? (
        <>
          <h2>{data[randomQuestion].question}</h2>
          {shuffledAnswers.map((answer, index) => (
            <div key={index}>
              <input type="radio" name="answer" id={`answer${index}`} required />
              <label htmlFor={`answer${index}`}>{answer}</label>
              <br />
            </div>
          ))}
        </>
      ) : <p>Вы ответили на все вопросы</p>}
    </div>
  )
}