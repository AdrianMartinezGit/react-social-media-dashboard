import React from 'react'

import OverviewCardComponent from './OverviewCardComponent'

import FacebookIcon from '../assets/images/icon-facebook.svg'
import TwitterIcon from '../assets/images/icon-twitter.svg'
import InstagramIcon from '../assets/images/icon-instagram.svg'
import YoutubeIcon from '../assets/images/icon-youtube.svg'

import ArrowUp from '../assets/images/icon-up.svg'
import ArrowDown from '../assets/images/icon-down.svg'

const BottomDashboardComponent = () => {
    return (
        <>
            <p className='overview-title px-6 lg:px-0 mt-5 pt-11'>Overview - Today</p>

            <div className='px-6 lg:px-0 grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mb-5'>
                <OverviewCardComponent title={"Page Views"} image={FacebookIcon} number={"87"} color={"lime-green"} arrow={ArrowUp} percent={"3"} />
                <OverviewCardComponent title={"Likes"} image={FacebookIcon} number={"52"} color={"bright-red"} arrow={ArrowDown} percent={"2"} />
                <OverviewCardComponent title={"Likes"} image={InstagramIcon} number={"5462"} color={"lime-green"} arrow={ArrowUp} percent={"2257"} />
                <OverviewCardComponent title={"Profile Views"} image={InstagramIcon} number={"52k"} color={"lime-green"} arrow={ArrowUp} percent={"1375"} />
                <OverviewCardComponent title={"Retweets"} image={TwitterIcon} number={"117"} color={"lime-green"} arrow={ArrowUp} percent={"303"} />
                <OverviewCardComponent title={"Likes"} image={TwitterIcon} number={"507"} color={"lime-green"} arrow={ArrowUp} percent={"553"} />
                <OverviewCardComponent title={"Likes"} image={YoutubeIcon} number={"107"} color={"bright-red"} arrow={ArrowDown} percent={"19"} />
                <OverviewCardComponent title={"Total Views"} image={YoutubeIcon} number={"1407"} color={"bright-red"} arrow={ArrowDown} percent={"12"} />
            </div>
        </>

    )
}

export default BottomDashboardComponent
