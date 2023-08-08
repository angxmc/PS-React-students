import React from 'react'
import Score from './Score';


function Student({ student }) {
  const { name, bio, scores } = student;

  return (
    <div className="student">
      <h2>{name}</h2>
      <p>{bio}</p>
      <h3>Scores:</h3>
      {scores.map((score, index) => (
        <Score key={index} score={score} />
      ))}
    </div>
  );
}

export default Student;