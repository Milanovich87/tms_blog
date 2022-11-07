import React from 'react'

import { Card } from '../Card/Card.data';
import { CardMain } from '../Card/Card';
import { dataCard } from '../Card/Card.data';
import './Blog.scss'

// const [ { dateCard, title, text, image } ] = dataCard

export const Blog = () => {
    return (
        <div className='blog__body'>
            <div className='blog__main-content'>
                <CardMain variant='big' />
                {dataCard.middle.map((card: { date: string | undefined; title: string | undefined; text: string | undefined; image: any; }) => <Card variant='middle' date={card.date} title={card.title} text={card.text} image={card.image} />)}
            </div>
            <div className='blog__feat-content'>
                {dataCard.small.map((card: { date: string | undefined; title: string | undefined; text: string | undefined; image: any; }) => <Card variant='small' date={card.date} title={card.title} text={card.text} image={card.image} />)}
                {dataCard.small.map((card: { date: string | undefined; title: string | undefined; text: string | undefined; image: any; }) => <Card variant='small' date={card.date} title={card.title} text={card.text} image={card.image} />)}
            </div>
        </div>
    )
}
