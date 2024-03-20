import React from 'react'
import { IFollowerProps } from '../interfaces/interface'

const FollowerCardComponent = (props: IFollowerProps) => {
  return (
    <div className={`card-style ${props.border}`}>
      <div className='flex flex-col items-center justify-evenly rounded-b-md w-full h-full cursor-pointer'>
        <div className='total-followers flex items-center gap-2'>
          <img src={props.image} alt="fb" className='' />
          <p>{props.name}</p>
        </div>
        <div className='text-center'>
          <p className='follower-numbers'>{props.followers}</p>
          <p className='follower-text pt-[10px]'>{props.type}</p>
        </div>
        <div className='flex place-items-center'>
          <img src={props.arrow} alt="up" className='mr-1' /> <span className={`follower-gain ${props.color}`}>{props.gain} Today</span>
        </div>
      </div>
    </div>
  )
}

export default FollowerCardComponent
