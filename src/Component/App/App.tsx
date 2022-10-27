import React from 'react';
import { Button } from '../MyButton/Button';
import './App.scss';


export const App = () => {
  const log = () => console.log('Hello')
  return (
    <div className="App">
      <Button content='Primary' func={log} disabled={true} />
    </div>
  );
}


