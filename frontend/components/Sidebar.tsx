import React from 'react'

function Sidebar() {
    return <aside className=' w-[6vw] h-[98vh] bg-black rounded-2xl flex flex-col justify-start items-center gap-4 relative'>
        <img src="./assets/home.png" alt="icon" className='logo' />
        <img src="./assets/profile.png" alt="icon" className='logo' />
        <img src="./assets/setting.png" alt="icon" className='logo' />
        <img src="./assets/logout.png" alt="icon" className="logo absolute bottom-5" />
    </aside>
}

export default Sidebar