import { useGetTestQuery } from "../features/api/apiSlice"

export const Test = () => {
  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error,
    refetch
  } = useGetTestQuery();

  let randomQuestion
  let shuffledAnswers

  if (data.length > 0) {
    randomQuestion = Math.floor(Math.random() * data.length)
    shuffledAnswers = data[randomQuestion].answers
      .map(answer => answer.replace(/[+()]/g, ''))
      .toSorted(() => Math.random() - 0.5)
  }

  if (isLoading) return <div className="test">Loading...</div>;
  if (isError) return <div className="test">Error: {error.message}</div>;

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
      <button onClick={refetch}>Начать сначала</button>
    </div>
  )
}