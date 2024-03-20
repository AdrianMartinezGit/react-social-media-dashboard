import React, { useEffect, useState } from 'react'

const HeaderComponent = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleMode = () => {
        if (darkMode) {
            document.documentElement.setAttribute("css-theme", "dark");
        } else {
            document.documentElement.setAttribute("css-theme", "light");
        }

        setDarkMode(!darkMode);
    }

    useEffect(() => {
        toggleMode();
    }, [])

    return (
        <div>
            <div className='bg-top-pattern'></div>
            <div className='px-6 lg:px-[14rem]'>
                <div className='grid grid-cols-12 pt-9'>
                    <div className='col-span-12 md:col-span-8'>
                        <div className='header-title'>Social Media Dashboard</div>
                        <div className='total-followers'>Total Followers: 23,004</div>
                        <hr className='hr-class' />
                    </div>
                    <div className='col-span-12 md:col-span-4 flex justify-end items-center dark-div'>
                        <div className='total-followers pr-2'>Dark Mode</div>
                        <label className="switch-label">
                            <input type="checkbox" onClick={toggleMode} />
                            <span className="slider-span rounded"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent
