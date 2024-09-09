import React from 'react';
import { Stack } from '@fluentui/react';
import MemoriesJson from './../public/Memories.json';
import FlipCardMemories from './FlipCardForMemories';

const Memories: React.FC = () => {
  return (
    <Stack horizontal wrap tokens={{ childrenGap: 100 }} styles={{ root: { backgroundColor: '#f3f3f3', alignItems : 'center', justifyContent : 'center', paddingBottom : '100px' } }}>
      {MemoriesJson.map((QnA : {image : string; memory : string;}, index) => (
        <Stack.Item
          grow
          disableShrink
          styles={{ root: { width: '25%', maxWidth: '40%', marginBottom: '50px', display: 'flex', justifyContent: 'center', alignItems : 'center' } }} 
          key={index}
        >
          <FlipCardMemories key={index} image={QnA.image} memory={QnA.memory} />
        </Stack.Item>
      ))}
    </Stack>
  );
};

export default Memories;