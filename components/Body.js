import Navbar from './Navbar';

export const Body = (props) => {
    const {children} = props;

    return <body className="bg-beach bg-cover">
        {/** Navbar */}
        <Navbar/>

        {/** Main Body */}
        <div className="p-4 space-y-4">
            {children}
        </div>

        {/** Footer */}
        <div className="bg-blue-500">
            Footer
        </div>
    </body>
}

export default Body;