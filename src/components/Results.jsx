export const Results = ({ data, refetch }) => {
  return (
    <>
      <h1>Результаты</h1>
      {data.map((item, index) => (
        <div key={index} className={item.correct ? 'correct' : 'incorrect'}>
          <h2>{item.question}</h2>
          {item.answers.map((answer, i) => (
            answer.includes('(+)') && item.correct ? (
              <p key={i + answer}>
                {answer.replace(/\(\+\)/g, '').trim()}
              </p>
            ) : answer.includes('(-)') ? (
              <p key={i + answer}>
                {answer.replace(/\(\-\)/g, '').trim()}
              </p>
            ) : null
          ))}
        </div>
      ))}
      <button onClick={refetch}>Начать сначала</button>
      {console.log(data[7].answers)}
    </>
  );
};