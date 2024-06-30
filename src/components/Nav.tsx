import React from 'react'

const Nav = () => {
    return (
        <nav className="w-full h-[4vh] fixed top-0 left-0 z-50">
            <div className=' text-white max-w-[1440px] mx-auto p-6 flex  justify-between items-center px-2 size-full'>
                <h1>Logo</h1>
                <ul className='flex gap-3'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
