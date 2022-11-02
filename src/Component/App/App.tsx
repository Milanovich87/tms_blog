import React from 'react';
import { Button } from '../MyButton/Button';
import './App.scss';
import { SvgDisLike } from '../MyIcons/SvgDisLike';
import { SvgLike } from '../MyIcons/SvgLike';
import { SvgBookMark } from '../MyIcons/SvgBooMark';


const log = () => console.log('Hello')

type DataType = {
  content?: any
  disabled?: boolean
  styles?: string
  img?: any
  active?: () => void
}

type DataMain = {
  primary: DataType
  secondary: DataType
  secondary2: DataType
  disLike: DataType
  like: DataType
  bookmark: DataType
}

const data: DataMain = {
  primary: {
    content: 'Primary',
    active: log,
    disabled: false,
    styles: 'btn button-primary',
  },
  secondary: {
    content: 'Secondary',
    disabled: false,
    styles: 'btn button-secondary',
  },
  secondary2: {
    content: 'Secondary 2',
    disabled: false,
    styles: 'btn button-secondary2',
  },
  disLike: {
    img: <SvgDisLike />,
    disabled: false,
    styles: 'button-dis-like',
  },
  like: {
    img: <SvgLike />,
    disabled: false,
    styles: 'button-like',
  },
  bookmark: {
    content: 'Button with icon',
    img: <SvgBookMark />,
    disabled: false,
    styles: 'btn button-book-mark',
  },
}

export const App = () => {

  return (
    <div className="App">
      <div className="wrapper__buttons">
        <Button prop={data.primary} />
        <Button prop={data.secondary} />
        <Button prop={data.secondary2} />
        <Button prop={data.disLike} />
        <Button prop={data.like} />
        <Button prop={data.bookmark} />
      </div>
    </div >
  );
}


