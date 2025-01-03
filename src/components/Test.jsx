import { data } from "../mocks/data"

export const Test = () => {
  let randomQuestion = Math.floor(Math.random() * data.length)
  return (
    <div className="test">
      <h1>Тестирование</h1>
      {!data[randomQuestion].answered ? (
        <>
          <h2>{data[randomQuestion].question}</h2>
          {data[randomQuestion].answers.map((answer, index) => (
            <div key={index}>
              <input type="radio" name='answer' id="answer" required />
              <label htmlFor="answer">{answer}</label>
              <br />
            </div>
          ))}
        </>
      ) : <p>Вы ответили на все вопросы</p>}
    </div>
  )
} 