import React from 'react';
import { Stack, Image, Text } from '@fluentui/react';
import MessagesTexts from './../public/Messages.json';

const Messages: React.FC = () => {
  return (
    <Stack tokens={{ childrenGap: 20 }} styles={{ root: { backgroundColor: '#f3f3f3' } }}>
      {MessagesTexts.map((person : {Message : string; name : string; pic: string}, index) => (
        <Stack
            key={index}
            horizontal
            horizontalAlign="space-between"
            styles={{ root: { flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', alignItems : 'center', justifyContent : 'center', paddingBottom : '100px' } }}
            tokens={{ childrenGap: 20 }}
        >
          <Image
            src={person.pic}
            alt="Happy Birthday"
            width={450}
            height={450}
            styles={{ root: { borderRadius: '70%' } }}
          />
          <Stack.Item>
            <Text variant="xxLarge" styles={{ root: { display: 'flex', marginLeft: '100px', maxWidth: '600px', textAlign : 'left', alignItems : 'center', height : '50px', marginRight: '100px', textTransform : 'bold' } }}>
              {person.name}
            </Text>
            <Text variant="xxLarge" styles={{ root: { display: 'flex', marginLeft: '100px', maxWidth: '600px', textAlign : 'left', paddingTop: '25px', height: '400px', marginRight: '100px', fontWeight : '400px' } }}>
              {person.Message}
            </Text>
          </Stack.Item>
        </Stack>
      ))}
    </Stack>
  );
};

export default Messages;
