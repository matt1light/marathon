import Navbar from './Navbar';
import Footer from './Footer';

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
        <Footer/>
    </body>
}

export default Body;