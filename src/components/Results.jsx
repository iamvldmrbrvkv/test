export const Results = ({ data, refetch }) => {
  const correctAnswers = data.filter(element => element.correct).length;
  const incorrectAnswers = data.length - correctAnswers;

  return (
    <div className="results">
      {correctAnswers > 8 && (
        <>
          <h1>Поздравляем! Вы успешно прошли тест!</h1>
          <p>Вы правильно ответили на все вопросы. Вы действительно отлично разбираетесь в IT.</p>
        </>
      )}
      {correctAnswers > 4 && (
        <>
          <h1>Хороший результат!</h1>
          <p>Вы ответили правильно на 5 вопросов. Так держать!</p>
        </>
      )}
      {correctAnswers < 4 && (
        <>
          <h1>Упс :(</h1>
          <p>Вы неправильно ответили на {incorrectAnswers} вопросов. Нужно подучить теорию.</p>
        </>
      )}
      {data.map((question, index) => (
        <div key={`question${index}`} className={question.correct ? 'correct' : 'incorrect'}>
          <h2>{question.question}</h2>
          {question.answers.map((answer, i) =>
            answer.includes('(+)') && question.correct ? (
              <p key={`answer${index}`}>
                {answer.replace(/\(\+\)/g, '').trim()}
              </p>
            ) : answer.includes('(-)') ? (
              <p key={`answer${index}`}>
                {answer.replace(/\(\-\)/g, '').trim()}
              </p>
            ) : null
          )}
        </div>
      ))}
      <button className="refetch" onClick={refetch}>Пройти еще раз</button>
    </div>
  );
};