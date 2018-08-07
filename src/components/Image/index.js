import React from 'react'

const Image = ({ name, type = null, extension = '.png', ...props }) => {
  const typePath = type ? `${type}/` : ''
  const src = require(`../../images/${typePath}${name}${extension}`)
  const variant2x = require(`../../images/${typePath}${name}@2x${extension}`)

  return <img src={src} srcSet={`${variant2x} 2x`} alt={name} {...props} />
}

export default Image
