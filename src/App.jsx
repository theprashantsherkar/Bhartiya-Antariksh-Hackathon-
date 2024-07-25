import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ImageUpload from './ImageUpload.jsx';
import crater from '../src/crater.jpg'
import Range from './Range.jsx';


const theme = createTheme();

const App = () => (
  <>  
    
    <div className='flex items-center justify-center   py-4 px-5 bg-slate-900 gap-4'>
      <div className='bg-slate-600 w-1/3 h-screen rounded-xl flex flex-col items-center text-white p-2'>
        Crater
        <div className='overflow-hidden p-3 '>
          <img className='rounded-xl' src={crater} alt="" />
        </div>
        <div className='p-3 '>
        <input type="range" name="" id=""  value={30} size={300}/>
        </div>
      </div>
      <div className='bg-slate-700 h-screen py-3 w-2/3 rounded-xl'>
        <ThemeProvider theme={theme}>
          <ImageUpload />

        </ThemeProvider>
      </div>
    </div>
  </>
);

export default App;
