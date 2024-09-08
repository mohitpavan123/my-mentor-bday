import React, { useState } from 'react';
import { Text, Stack, Image, PrimaryButton } from '@fluentui/react';
import './FlipCard.css'; // We'll define styles here

const FlipCard: React.FC<{
    question: string;
    answer: string;
  }> = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnsShown, setAnsShown] = useState(false);

  const handleFlip = () => {
    setIsFlipped(true);
  };

  const handleAnsButtonClick = () => {
    setAnsShown(true);
  }

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image src="cricket.jpg" alt="Card Front" width={200} height={300} />
        </div>
        <div className="flip-card-back">
            <Stack verticalAlign="center" horizontalAlign="center" styles={{ root: { height: '100%' } }}>
                <Text variant="xxLarge">{question}</Text>
                {!isAnsShown && <PrimaryButton text="Show ans" onClick={handleAnsButtonClick}/>}
                {isAnsShown && <Text variant="xxLarge">Answer: {answer}</Text>}
            </Stack>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
