import React, { useState } from 'react';
import BasicWishes from './BasicWishes';
import Messages from './Messages';
import CricketQuiz from './CricketQuiz';
import { PrimaryButton, Stack } from '@fluentui/react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{}}> {/* Space for footer */}
        <BasicWishes />
        <Messages />
        <CricketQuiz />
      </div>
{/*       
      <footer style={{ 
        position: 'absolute',
        bottom: 0, 
        width: '100%',
        backgroundColor: '#f3f3f3', 
        textAlign: 'center',
        height: '0vh',
      }}>
        <Stack horizontal horizontalAlign="center" verticalAlign='center' tokens={{ childrenGap: 10 }} styles={{ root: { position: 'relative', margin: '20px 0', alignItems: 'center', justifyContent: 'center' } }}>
          <PrimaryButton
            text="Basic Wishes"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          />
          <PrimaryButton
            text="Messages"
            onClick={() => handlePageChange(2)}
            disabled={currentPage === 2}
          />
        </Stack>
      </footer> */}
    </div>
  );
};

export default App;