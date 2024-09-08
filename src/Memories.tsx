import React from 'react';
import { Stack } from '@fluentui/react';
import MemoriesJson from './../public/Memories.json';
import FlipCardMemories from './FlipCardForMemories';

const Memories: React.FC = () => {
  return (
    <Stack horizontal tokens={{ childrenGap: 50 }} styles={{ root: { backgroundColor: '#f3f3f3', alignItems : 'center', justifyContent : 'center', paddingBottom : '100px' } }}>
      {MemoriesJson.map((QnA : {image : string; memory : string;}, index) => (
          <FlipCardMemories key={index} image={QnA.image} memory={QnA.memory} />
      ))}
    </Stack>
  );
};

export default Memories;