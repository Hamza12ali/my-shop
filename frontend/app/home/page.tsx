import ShopCard from '@/components/ShopCard'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function Home() {
    return (
        <main className='relative flex items-center justify-center h-screen w-screen homepage gap-2 bg-gray-900'>
            <Sidebar />
            <div className="shops-container grid max-w-[90vw] min-w-[92vw] max-h-[97vh] min-h-[97vh] bg-red-400 overflow-hidden border-2">
                <ShopCard />
            </div>
        </main>
    )
}

export default Home