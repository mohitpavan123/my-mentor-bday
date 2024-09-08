import React from 'react';
import { PrimaryButton, Text, Stack, Image } from '@fluentui/react'

const BasicWishes: React.FC = () => {
  return (
    <Stack horizontalAlign="center" verticalAlign="center" styles={{ root: { height : '1000px', paddingBottom: '20px', backgroundColor: '#f3f3f3', alignItems : 'center' } }}>
      <Text variant="xxLargePlus" styles={{ root: { color: '#0078d4', marginBottom: '20px' } }}>
        Happy Birthday, Radhikaaaa!
      </Text>
      <Text variant="xxLarge" styles={{ root: { alignItems : 'center', justifyContent : 'center' } }}>
        Thank you for being an amazing mentor! 🎉<br />
      </Text>
      <Text variant="xxLarge" styles={{ root: { alignItems : 'center', justifyContent : 'center' } }}>
        Keep the same charm always and keep inspiring us! 🎂<br />
      </Text>
      <Text variant="xxLarge" styles={{ root: { marginBottom: '100px', alignItems : 'center', justifyContent : 'center' } }}>
        Wish you Best of luck from all of us for your year ahead! 🎈<br />
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
