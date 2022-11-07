import { useState } from 'react'

import { Button } from '../MyButton/Button'
import { SvgDisLike } from '../MyIcons/SvgDisLike';
import { SvgLike } from '../MyIcons/SvgLike';
import { SvgBookMark } from '../MyIcons/SvgBooMark';
import { IconMore } from '../MyIcons/IconMore'
import { Image } from '../Image/Image'
// @ts-ignore-start
import SpaceMiddle1 from '../../assets/images/SpaceMiddle1.png'
// @ts-ignore-end
// @ts-ignore-start
import SpaceMiddle2 from '../../assets/images/SpaceMiddle2.png'
// @ts-ignore-end
// @ts-ignore-start
import SpaceMiddle3 from '../../assets/images/SpaceMiddle3.png'
// @ts-ignore-end
// @ts-ignore-start
import SpaceMiddle4 from '../../assets/images/SpaceMiddle4.png'
// @ts-ignore-end
// @ts-ignore-start
import SpaceSmall1 from '../../assets/images/SpaceSmall1.png'
// @ts-ignore-end
// @ts-ignore-start
import SpaceSmall2 from '../../assets/images/SpaceSmall2.png'
// @ts-ignore-end
// @ts-ignore-start
import SpaceSmall3 from '../../assets/images/SpaceSmall3.png'
// @ts-ignore-end
import './Card.scss'

const date = new Date()
const id = date.getTime()
const year = date.getFullYear()
const month: any = date.getMonth()
const nameMonth: any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const day = date.getDate()

type CardsProps = {
    variant?: string
    date?: string
    id?: any
    text?: string
    children?: any
    image?: any
    title?: string
    middle?: any
    small?: any
}

export const dataCard: CardsProps = {
    middle: [
        {
            id,
            image: SpaceMiddle1,
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
            date: ` ${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
            // text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        },
        {
            id,
            image: SpaceMiddle2,
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
            date: ` ${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
            // text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        },
        {
            id,
            image: SpaceMiddle3,
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
            date: ` ${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
            // text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        },
        {
            id,
            image: SpaceMiddle4,
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
            date: ` ${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
            // text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        }
    ],
    small: [
        {
            id,
            image: SpaceSmall1,
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
            date: ` ${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        },
        {
            id,
            image: SpaceSmall2,
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
            date: ` ${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        },
        {
            id,
            image: SpaceSmall3,
            title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
            date: ` ${nameMonth[month]} ${day < 10 ? '0' + day : day}, ${year}`,
        }
    ]
}

export const Card = ({ variant, date, image, id, title, text }: CardsProps) => {

    const [count, setCount] = useState(0)
    const onClick = () => setCount(count + 1)
    const countstr = count === 0 ? ' ' : count
    const [count2, setCount2] = useState(0)
    const onClick2 = () => setCount2(count2 + 1)
    const countstr2 = count2 === 0 ? ' ' : count2

    return (
        <div className={`card__${variant}`}>
            <div className='card__main'>
                <div className='card__info'>
                    <div className='card__date'>
                        {date}
                    </div>
                    <div className='card__title'>
                        <h3>{title}</h3>
                    </div>
                    <div className='card__description'>
                        {text}
                    </div>
                </div>
                <div className='card__image'>
                    <Image image={image} alt={title} />
                </div>
            </div>
            <div className='card__footer'>
                <div className='card__like'>
                    <Button className='btn-card btn-like' onClick={onClick} icon={<SvgLike />}>{countstr}</Button>
                    <Button className='btn-card btn-dislike' onClick={onClick2} icon={<SvgDisLike />}>{countstr2}</Button>
                </div>
                <div className='card__edit'>
                    <Button className='btn-card btn-mark' icon={<SvgBookMark />} />
                    <Button className='btn-card btn-edit' icon={<IconMore />} />
                </div>
            </div>
            <div className="card__line"></div>
        </div>
    )
}
