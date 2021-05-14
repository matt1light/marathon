import Head from 'next/head';
import Navbar from '../components/Navbar';
import Warning from '../components/Warning';
import AssetBreakdown from '../components/dashboard/AssetBreakdown';
import Summary from '../components/dashboard/Summary';
import ActivePools from '../components/ActivePools';

export const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Marathon Dashboard</title>
            </Head>
            <body className="bg-gray-700">
                {/** Navbar */}
                <Navbar/>
                {/** Main Body */}
                <div className="p-4 bg-gray-700 space-y-4">
                    {/** Warning */}
                    <Warning/>
                    <div className="m-auto grid grid-cols-1 gap-4 max-w-md grid-flow-row lg:grid-cols-2 lg:max-w-4xl">
                        {/** Total Value */}
                        <Summary/>
                        {/** Asset Breakdown */}
                        <AssetBreakdown/>
                        {/** Pools */}
                        <ActivePools />
                    </div>
                </div>
                {/** Footer */}
                <div className="bg-blue-500">
                    Footer
                </div>
            </body>
        </>
    )
}



export default Dashboard;