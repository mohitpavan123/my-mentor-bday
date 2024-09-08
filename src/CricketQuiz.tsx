import React from 'react';
import { Stack } from '@fluentui/react';
import QuizQnA from './../public/QuizQnA.json';
import FlipCard from './FlipCard';

const CricketQuiz: React.FC = () => {
  return (
    <Stack horizontal wrap tokens={{ childrenGap: 100 }} styles={{ root: { backgroundColor: '#f3f3f3', alignItems : 'center', justifyContent : 'center', paddingBottom : '100px', width : '100%' } }}>
      {QuizQnA.map((QnA: { question: string; answer: string; }, index) => (
        <Stack.Item
          grow
          disableShrink
          styles={{ root: { width: '20%', maxWidth: '300px', marginBottom: '50px', display: 'flex', justifyContent: 'center', alignItems : 'center' } }} 
          key={index}
        >
          <FlipCard question={QnA.question} answer={QnA.answer} />
        </Stack.Item>
    ))}
    </Stack>
  );
};

export default CricketQuiz;