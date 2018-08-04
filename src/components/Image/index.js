import React from 'react'

const Image = ({ name, extension = '.png', ...props }) => {
  const src = require(`../../images/${name}${extension}`)
  const variant2x = require(`../../images/${name}@2x${extension}`)

  return <img src={src} srcSet={`${variant2x} 2x`} alt={name} {...props} />
}

export default Image
