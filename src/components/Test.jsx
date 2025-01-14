import { useGetTestQuery } from "../features/api/apiSlice";
import { apiSlice } from "../features/api/apiSlice";
import { useDispatch } from "react-redux";
import { Results } from "./Results";

export const Test = () => {
  const { data = [], isLoading, isError, error, refetch } = useGetTestQuery();
  const dispatch = useDispatch();

  const handleAnswer = (e, index) => {
    setTimeout(() => {
      dispatch(
        apiSlice.util.updateQueryData("getTest", undefined, (draft) => {
          if (draft[index]) {
            draft[index].answered = true;
            const isCorrect = draft[index].answers.some(
              (answer) => answer.includes("(+)") && answer.includes(e.target.value)
            );
            if (!isCorrect) {
              draft[index].answers = draft[index].answers.map((answer) =>
                answer.includes(e.target.value) ? `${answer} (-)` : answer
              );
            } else {
              draft[index].correct = true;
            }
          }
          e.target.checked = false;
        })
      );
    }, 1000);
  };

  const unansweredQuestions = data.filter((item) => !item.answered);
  const randomIndex = Math.floor(Math.random() * unansweredQuestions.length);
  const randomQuestion = unansweredQuestions[randomIndex];
  const shuffledAnswers = randomQuestion?.answers
    .map((answer) => answer.replace(/\(\+\)/g, "").trim())
    .toSorted(() => Math.random() - 0.5);

  const originalIndex = data.indexOf(randomQuestion);
  const answeredCount = data.filter((item) => item.answered).length;
  const totalCount = data.length;
  const progressPercent = totalCount > 0 ? (answeredCount / totalCount) * 100 : 0;

  if (isLoading) return <div className="test">Loading...</div>;
  if (isError) return <div className="test">Error: {error.message}</div>;

  return (
    <>
      {unansweredQuestions.length > 0 ? (
        <div className="test">
          <h1 className="test__title">Тестирование</h1>
          <div className="test__questions">
            <h2 className="test__subtitle">{randomQuestion.question}</h2>
            {shuffledAnswers.map((answer, index) => (
              <div className="test__answer" key={`answer${index}`}>
                <input
                  type="radio"
                  name="answer"
                  value={answer}
                  id={`answer${index}`}
                  required
                  onChange={(e) => handleAnswer(e, originalIndex)}
                />
                <label className="test__label" htmlFor={`answer${index}`}>
                  {answer}
                </label>
                <br />
              </div>
            ))}
          </div>
          <div className="test__progress-container">
            <div className="test__progress-labels">
              <span className="test__progress-label">0</span>
              <span className="test__progress-label">{totalCount}</span>
            </div>
            <div className="test__progress-bar-wrapper">
              <div
                className="test__progress-bar"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <span
              className="test__progress"
              style={{ left: `calc(${progressPercent}% - 5px)` }}
            >
              {answeredCount === 0 ? "" : answeredCount}
            </span>
          </div>
        </div>
      ) : (
        <Results data={data} refetch={refetch} />
      )}
    </>
  );
};
