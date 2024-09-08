import React from 'react';
import { PrimaryButton, Text, Stack, Image } from '@fluentui/react'

const BasicWishes: React.FC = () => {
  return (
    <Stack horizontalAlign="center" verticalAlign="center" styles={{ root: { height : '1000px', paddingBottom: '100px', backgroundColor: '#f3f3f3', alignItems : 'center' } }}>
      <Text variant="xxLargePlus" styles={{ root: { color: '#0078d4', marginBottom: '20px' } }}>
        Happy Birthday, Azuree!
      </Text>
      <Text variant="xxLarge" styles={{ root: { marginBottom: '100px' } }}>
        Thank you for being an amazing mentor! 🎉
      </Text>
      <Image
        src="Happy-Birthday-Card.jpg"
        alt="Happy Birthday"
        width={600}
        height={600}
        styles={{ root: { borderRadius: '50%', marginBottom: '20px' } }}
      />
    </Stack>
  );
};

export default BasicWishes;
