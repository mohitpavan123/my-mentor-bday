import React from 'react';
import { Stack } from '@fluentui/react';
import QuizQnA from './../public/QuizQnA.json';
import FlipCard from './FlipCard';

const CricketQuiz: React.FC = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 20 }} styles={{ root: { backgroundColor: '#f3f3f3', alignItems : 'center', justifyContent : 'center', paddingBottom : '100px' } }}>
      {QuizQnA.map((QnA : {question : string; answer : string;}, index) => (
          <FlipCard key={index} question={QnA.question} answer={QnA.answer} />
      ))}
    </Stack>
  );
};

export default CricketQuiz;