import React from 'react';
import { Button } from '../MyButton/Button';
import './App.scss';
import { Input } from '../Input/input';
import { useState } from 'react'
import { ButtonHTMLAttributes, ReactElement } from 'react' // { useState }
import { data } from '../MyButton/Button.data';
import { dataInput } from '../Input/Input.dataInput';

export const App = () => {

  return (
    <div className="App">
      <div className="wrapper">
        <div className="buttons">
          <Button prop={data.primary} />
          <Button prop={data.secondary} />
          <Button prop={data.secondary2} />
          <Button prop={data.disLike} />
          <Button prop={data.like} />
          <Button prop={data.bookmark} />
        </div>
        <div className="form">
          <form className='inputs' >
            <h3 className='title'>INPUTS</h3>
            <Input prop={dataInput.input} />
            <Input prop={dataInput.input} />
            <Input prop={dataInput.input} />
            <Input prop={dataInput.inputDisabled} />
            <Input prop={dataInput.input} />
          </form>
        </div>
      </div>
    </div >
  );
}


