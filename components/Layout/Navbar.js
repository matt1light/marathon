import React, { useState } from 'react';
import Link from 'next/link';
import Drawer from './Drawer';

export const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleOpenDrawer = () => {
        setOpenDrawer(true);
    }

    const paths = [
        {
            name: 'Dashboard',
            path: '/',
            icon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            )
        },
        {
            name: 'Pools',
            path: '/pools',
            icon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
    ]

    return (
        <>
            <Drawer paths={paths} open={openDrawer} onDrawerClose={() => setOpenDrawer(false)}/>
            <div className="h-16 md:h-20"/>
            <div className="md:hidden px-6 py-4 flex flex-row justify-between items-center fixed w-full h-16 top-0 bg-gray-100">
                <div className="flex flex-row justify-start space-x-2">
                    <button className="h-8 w-8 rounded-full hover:bg-gray-300" onClick={handleOpenDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <button className="h-8 w-8 rounded-full">
                        <img className="h-7 w-7" src={"/turtle.png"} alt="turtle logo"/>
                    </button>
                </div>
                <button className="rounded-full bg-green-700 px-5 py-1 text-white flex-row justify-center items-center hover:bg-green-600">
                    CONNECT
                </button>
            </div>
            <div className="hidden md:flex px-6 py-4 flex-row justify-between items-center fixed w-full h-20 top-0 bg-gray-100">
                <div className="flex flex-row justify-start space-x-2">
                    {/* <button className="h-8 w-8 rounded-full hover:bg-gray-300" onClick={handleOpenDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button> */}
                    <button className="h-8 w-8 rounded-full">
                        <img className="h-7 w-7" src={"/turtle.png"} alt="turtle logo"/>
                    </button>
                    {
                        paths.map((item) => {
                            return <Link href={item.path}>
                                <button className="hover:underline" key={item.path}>
                                    {item.name}
                                </button>
                            </Link>
                        })
                    }
                </div>
                <button className="rounded-full bg-green-700 px-5 py-1 text-white flex-row justify-center items-center hover:bg-green-600">
                    CONNECT
                </button>
            </div>
        </>
    )
}

export default Navbar;