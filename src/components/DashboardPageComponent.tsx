import React, { useEffect } from 'react'
import HeaderComponent from './HeaderComponent'

const DashboardPageComponent = () => {
  useEffect(() => {
    document.body.classList.add('gradient-bg-lm');
  }, []);

  return (
    <div>
        {/* This is the main row for the 4 social media card components, including platform, follower count, total count, how much gained/lost, and the dark mode button */}
        <HeaderComponent/>

        {/* This is the secondary row for today's overview, including platform specifics such as page/profile/video views, likes, and retweets */}
    </div>
  )
}

export default DashboardPageComponent
