export const Results = ({ data, refetch }) => {
  return (
    <>
      <h2>Результаты</h2>
      <div className="answers">
        {data.map((item, index) => (
          <div key={index} className="answer">
            <h3>{item.question}</h3>
            <div>
              {item.answers.map((answer, i) => (
                <div key={i} className={answer.includes('+') ? 'correct' : 'incorrect'}>
                  {answer.replace(/[+()]/g, '')}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={refetch}>Начать сначала</button>
    </>
  );
};