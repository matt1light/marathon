import Head from 'next/head';
import Warning from '../components/Warning';
import AssetBreakdown from '../components/dashboard/AssetBreakdown';
import Summary from '../components/dashboard/Summary';
import ActivePools from '../components/ActivePools';
import Body from '../components/Body';
import CardGrid from '../components/CardGrid';

export const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Turtle Finance Dashboard</title>
            </Head>
            <Body>
                    {/** Warning */}
                    <Warning/>
                    <CardGrid>
                        {/** Total Value */}
                        <Summary/>
                        {/** Asset Breakdown */}
                        <AssetBreakdown/>
                        {/** Pools */}
                        <ActivePools />
                    </CardGrid>
            </Body>
        </>
    )
}



export default Dashboard;