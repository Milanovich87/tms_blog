import { SvgDisLike } from '../MyIcons/SvgDisLike';
import { SvgLike } from '../MyIcons/SvgLike';
import { SvgBookMark } from '../MyIcons/SvgBooMark';
import { DataMain } from './Button.type';


const log = () => console.log('Hello')

export const data: DataMain = {
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