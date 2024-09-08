import React, { useState } from 'react';
import { Text, Stack, Image, PrimaryButton } from '@fluentui/react';
import './FlipCard.css'; // We'll define styles here

const FlipCardMemories: React.FC<{
    image : string;
    memory: string;
  }> = ({ image, memory}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card-memories ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image src={image} alt="Card Front" width={450} height={650} />
        </div>
        <div className="flip-card-back">
            <Stack verticalAlign="center" horizontalAlign="center" styles={{ root: { height: '100%' } }}>
                <Text variant="xLarge" style = {{fontStyle : 'oblique'}}>{memory}</Text>
            </Stack>
        </div>
      </div>
    </div>
  );
};

export default FlipCardMemories;
