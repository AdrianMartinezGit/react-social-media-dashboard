import React from 'react'
import { IOverviewProps } from '../interfaces/interface'

const OverviewCardComponent = (props: IOverviewProps) => {
  return (
    <div className='overview-card flex flex-col items-center'>
      <div className='page-views flex justify-between'>
        <p className='page-views-text'>{props.title}</p>
        <img src={props.image} alt='icon' />
      </div>

      <div className='gain-div flex justify-between items-end'>
        <p className='number-gain-text'>{props.number}</p>
        <div className='flex items-center'>
          <img src={props.arrow} alt="arrow" className='mr-1' />
          <p className={`perfect-text ${props.color}`}>{props.percent}%</p>
        </div>
      </div>
    </div>
  )
}

export default OverviewCardComponent
