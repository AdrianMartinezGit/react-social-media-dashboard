import React from 'react'

import TopDashboardComponent from './TopDashboardComponent';
import BottomDashboardComponent from './BottomDashboardComponent';

const BothDashboardComponent = () => {
    return (
        <div className='px-0 lg:px-56'>
            <TopDashboardComponent />
            <BottomDashboardComponent />
        </div>
    )
}

export default BothDashboardComponent
