import React from 'react';

export const Navbar = () => {
    return (
        <>
            <div className="h-16 md:h-20"/>
            <div className="md:hidden px-6 py-4 flex flex-row justify-between items-center fixed w-full h-16 top-0 bg-gray-100">
                <div className="flex flex-row justify-start space-x-2">
                    <button className="h-8 w-8 rounded-full hover:bg-gray-300">
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
                    <button className="h-8 w-8 rounded-full hover:bg-gray-300">
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
        </>
    )
}

export default Navbar;