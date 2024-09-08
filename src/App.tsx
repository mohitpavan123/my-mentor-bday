import React, { useState } from 'react';
import BasicWishes from './BasicWishes';
import Messages from './Messages';
import CricketQuiz from './CricketQuiz';
import Memories from './Memories';
import YouTubeVideo from './YouTubeVideoWishes';
import { PrimaryButton, Stack } from '@fluentui/react';

const App: React.FC = () => {
  // const [currentPage, setCurrentPage] = useState<number>(1);

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  return (
    <div style={{ position: 'relative', backgroundColor: '#f3f3f3' }}>
      <div>
        <BasicWishes />
        <h1 style = {{fontWeight : '600px', width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '50px' }}> Wishes </h1>
        <h4 style = {{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '20px', paddingBottom : '50px' }}> 
          "Here are our best wishes for you mentor!"
        </h4>
        <Messages/>
        <h1 style = {{fontWeight : '600px', width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '50px' }}> Cric-Quiz </h1>
        <h4 style = {{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '20px', paddingBottom : '50px' }}> 
          "Because you like cricket, here is a quiz for you on the same, flip the card to see the question and click on the see answer button to view the answer!"
        </h4>
        <CricketQuiz />
        <h1 style = {{fontWeight : '600px', width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '50px' }}> Memories together </h1>
        <h4 style = {{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '20px', paddingBottom : '50px' }}> 
          "Flip the cards to remember the good times we all had together and flip back to open the image!"
        </h4>
        <Memories />
        <h1 style = {{fontWeight : '600px', width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '50px' }}> A small dare awaits you </h1>
        <h4 style = {{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '20px', paddingBottom : '50px' }}> 
          "Prank call to sulabh/prativen and act you are a HR and talk random topic which ever you want :p"
        </h4>
        <h1 style = {{fontWeight : '600px', width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '50px' }}> A small youtube video wishes for you! </h1>
        <h4 style = {{ width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '20px', paddingBottom : '50px' }}> 
          "Finally lets end this fun with a video to wish you a very happy birthday!"
        </h4>
        <YouTubeVideo />
        <h4 style = {{fontWeight : '400px', width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '30px' }}>Here you go, you can start reviewing the&nbsp;<a href="https://github.com/mohitpavan123/my-mentor-bday" target="_blank">code</a>&nbsp;and you can give comments too :p.</h4>

        <h1 style = {{fontWeight : '600px', width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '20px', fontSize : '50px' }}>Happy birthday once again radhikaa!!</h1>

        
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