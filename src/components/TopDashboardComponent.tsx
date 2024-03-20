import React from 'react'

import FollowerCardComponent from './FollowerCardComponent';

import FacebookIcon from '../assets/images/icon-facebook.svg'
import TwitterIcon from '../assets/images/icon-twitter.svg'
import InstagramIcon from '../assets/images/icon-instagram.svg'
import YoutubeIcon from '../assets/images/icon-youtube.svg'

import ArrowUp from '../assets/images/icon-up.svg'
import ArrowDown from '../assets/images/icon-down.svg'

const TopDashboardComponent = () => {
    return (
        <div className='px-6 lg:px-0 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-0 md:pt-11'>
            <FollowerCardComponent border={'facebook'} image={FacebookIcon} name={'@nathanf'} followers={'1987'} type={'FOLLOWERS'} color={"lime-green"} arrow={ArrowUp} gain={'12'} />
            <FollowerCardComponent border={'twitter'} image={TwitterIcon} name={'@nathanf'} followers={'1044'} type={'FOLLOWERS'} color={"lime-green"} arrow={ArrowUp} gain={'99'} />
            <FollowerCardComponent border={'instagram'} image={InstagramIcon} name={'@realnathanf'} followers={'11k'} type={'FOLLOWERS'} color={"lime-green"} arrow={ArrowUp} gain={'1099'} />
            <FollowerCardComponent border={'youtube'} image={YoutubeIcon} name={'Nathan F.'} followers={'8239'} type={'SUBSCRIBERS'} color={"bright-red"} arrow={ArrowDown} gain={'144'} />
        </div>
    )
}

export default TopDashboardComponent
