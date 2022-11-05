import React from 'react'
import PropTypes from 'prop-types'
// import classNames from 'classnames'
import '../../assets/Astronaut.jpg'
import '../Image/Image.scss'

export const Image = (src: any, alt: any, className: any) => {
    const classes = className
    return (
        <img src={src} alt={alt} className={classes} />
    )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,

}

Image.defaultProps = {
    src: '../../assets/Astronaut.jpg',
    alt: 'avatar',
    className: 'qwe'

}

