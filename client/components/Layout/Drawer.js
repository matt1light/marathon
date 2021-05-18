import Link from 'next/link';

export const Drawer = (props) => {
const {children, open, onDrawerClose, paths} = props;

    return <div className={`md:hidden w-1/2 h-full fixed bg-gray-200 p-3 z-50 ${open ? '' : 'hidden' }`}>
        {/** Exit button */}
        <div className="flex flex-row justify-end items-center">
            <div>
                <button onClick={onDrawerClose} className="rounded-full h-8 w-8 hover:bg-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
        {/** list of pages */}
        <div className="flex flex-col space-y-2">
            {/** Account */}
            <div>
                <button className="p-2 hover:bg-gray-300 bg-gray-50 rounded-md w-full">
                    ACCOUNT NUMBER
                </button>
            </div>
            <div className="flex flex-col space-y-2">
                {
                    paths.map((item) => {
                        return <Link href={item.path}>
                            <button
                                key={item.path}
                                className="text-center flex flex-row justify-center hover:underline"
                                onClick={() => {
                                }}
                            >
                                <item.icon/>
                                {item.name}
                            </button>
                        </Link>
                    })
                }
            </div>
        </div>
    </div>
}

export default Drawer;