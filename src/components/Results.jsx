export const Results = ({ data, refetch }) => {
  const correctAnswers = data.filter((element) => element.correct).length;
  const incorrectAnswers = data.length - correctAnswers;

  return (
    <div className="test__results">
      {correctAnswers > 8 && (
        <>
          <h1 className="test__title">Поздравляем! Вы успешно прошли тест!</h1>
          <p className="test__text--special">
            Вы правильно ответили на все вопросы. Вы действительно отлично
            разбираетесь в IT.
          </p>
        </>
      )}
      {correctAnswers > 4 && correctAnswers <= 8 && (
        <>
          <h1 className="test__title">Хороший результат!</h1>
          <p className="test__text--special">
            Вы ответили правильно на {correctAnswers} вопросов. Так держать!
          </p>
        </>
      )}
      {correctAnswers <= 4 && (
        <>
          <h1 className="test__title">Упс :(</h1>
          <p className="test__text--special">
            Вы неправильно ответили на {incorrectAnswers} вопросов. Нужно подучить
            теорию.
          </p>
        </>
      )}
      {data.map((question, index) => (
        <div
          key={`question${index}`}
          className={`test__message--${question.correct ? "correct" : "incorrect"}`}
        >
          <h2 className="test__subtitle--special">{question.question}</h2>
          {question.answers.map((answer, i) =>
            answer.includes("(+)") && question.correct ? (
              <p key={`answer${index}`} className="test__text">
                {answer.replace(/\(\+\)/g, "").trim()}
              </p>
            ) : answer.includes("(-)") ? (
              <p key={`answer${index}`} className="test__text">
                {answer.replace(/\(\-\)/g, "").trim()}
              </p>
            ) : null
          )}
        </div>
      ))}
      <button className="test__button" onClick={refetch}>
        Пройти еще раз
      </button>
    </div>
  );
};
