import React from 'react'

const Footer = ({filters}) => {
  return (
    <div>
      {JSON.stringify(filters, null,2)}
    </div>
  )
}

export default Footer