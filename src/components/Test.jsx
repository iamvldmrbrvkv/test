import { data } from "../mocks/data"

export const Test = () => {
  let randomQuestion = Math.floor(Math.random() * data.length)
  const shuffledAnswers = data[randomQuestion].answers.sort(() => Math.random() - 0.5)
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