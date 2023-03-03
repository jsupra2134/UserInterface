import React from 'react'

const ChartsHeader = ({title}) => {
  return (
    <div className = "ChartHeader">
        <p className="title">
            {title}
        </p>
    </div>
  )
}

export default ChartsHeader