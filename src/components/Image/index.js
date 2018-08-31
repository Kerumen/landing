import React from 'react'

const Image = ({
  name,
  type = null,
  extension = '.png',
  retina = true,
  ...props
}) => {
  const typePath = type ? `${type}/` : ''

  return (
    <img
      src={require(`../../images/${typePath}${name}${extension}`)}
      alt={name}
      {...(retina
        ? {
            srcSet: `${require(`../../images/${typePath}${name}@2x${extension}`)} 2x`,
          }
        : null)}
      {...props}
    />
  )
}

export default Image
