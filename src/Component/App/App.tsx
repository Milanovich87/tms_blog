import React from 'react';
import { Button } from '../MyButton/Button';
import './App.scss';
import { Input } from '../Input/input';
import { dataButtons } from '../MyButton/Button';
import { dataInput } from '../Input/input';

export const App = () => {

  return (
    <div className="App">
      <div className="wrapper">
        <div className="buttons">
          {dataButtons.map(({
            text,
            className,
            icon
          }: any, index: number) => (
            <Button
              key={index}
              text={text}
              className={className}
              icon={icon} />
          ))}
        </div>
        <div className="form">
          <form className='inputs' >
            <h3 className='title'>INPUTS</h3>
            {dataInput.map(({
              title,
              placeholder,
              disabled,
              value,
              error,
              errorMessage
            }: any, index: number) => (
              <Input
                key={index}
                title={title}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                error={error}
                errorMessage={errorMessage}
              />
            ))}
          </form>
        </div>
      </div>
    </div >
  );
}


