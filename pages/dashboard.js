import Head from 'next/head';

export const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Marathon Dashboard</title>
            </Head>
            <body className="bg-gray-700">
                {/** Navbar */}
                <div className="px-6 py-4 flex flex-row justify-between items-center fixed w-full h-16 top-0 bg-gray-100">
                    <div className="flex flex-row justify-start space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <img className="h-7 w-7" src={"/fda-runner.svg"} alt="marathon logo"/>
                    </div>
                    <div className="rounded-full bg-indigo-500 px-5 py-1 text-white flex-row justify-center items-center">
                        CONNECT
                    </div>
                </div>
                {/** Main Body */}
                <div className="p-4 grid grid-cols-1 gap-4 mt-16 bg-gray-700">
                    {/** Warning */}
                    <div className="p-4 rounded-xl shadow-xl bg-gray-200">
                        <p className="text-sm">Using Smart Contracts, Tokens, and Crypto is always a risk. DYOR before investing.</p>
                    </div>
                    {/** Total Value */}
                    <div className="p-4 rounded-xl shadow-xl flex flex-col space-y-2 bg-gray-200">
                        {/** Total Value locked */}
                        <div className="">
                            <h2 className="text-1xl">TVL</h2>
                            <p className="text-3xl">$3.5M</p>
                        </div>
                        {/** Current Portfolio Value */}
                        <div className="">
                            <h2 className="text-1xl">Portfolio Value</h2>
                            <p className="text-3xl">$1000</p>
                        </div>
                        {/** Active Pools*/}
                        <div className="">
                            <h2 className="text-1xl">Active Pools</h2>
                            <p className="text-3xl">3</p>
                        </div>
                    </div>
                    {/** Asset Breakdown */}
                    <div className="p-4 rounded-xl shadow-xl bg-gray-200">
                        <h2 className="text-3xl">Asset Breakdown</h2>
                        <div className="border-b-2"/>
                        <div className="grid grid-rows-3 grid-cols-4 gap-2 p-2">
                            <div className="font-bold">
                                Value
                            </div>
                            <div className="font-bold">
                                Asset
                            </div>
                            <div className="font-bold">
                                Amount
                            </div>
                            <div className="font-bold">
                                Price
                            </div>
                            {
                                [
                                    {
                                        asset: 'ETH',
                                        amount: 1.5,
                                        price: 3500
                                    },
                                    {
                                        asset: 'USDC',
                                        amount: 3000,
                                        price: 1.01
                                    },
                                ].map((asset) => {
                                    return <>
                                        <div className="">
                                            ${asset.price*asset.amount}
                                        </div>
                                        <div className="">
                                            {asset.asset}
                                        </div>
                                        <div className="">
                                            {asset.amount}
                                        </div>
                                        <div className="">
                                            ${asset.price}
                                        </div>
                                    </>
                                })
                            }
                        </div>
                    </div>
                    {/** Pools */}
{/* , ['BTC', '/wrapped-bitcoin-wbtc-logo.svg', 10, 'Tuesday'], ['ETH', '/Ethereum_logo.svg', 2, 'Sunday'] */}
                    {
                        [['ETH', '/Ethereum_logo.svg', 5, 'Monday']].map((asset) => {
                            return <div className="bg-gray-200 p-4 rounded-xl shadow-xl" key={asset} >
                                <div className="flex flex-col space-y-2">
                                    {/** Pool Header */}
                                    <div className="flex flex-row justify-between items-center py-1">
                                        <div className="h-5 w-5 flex items-center justify-center">
                                            <img src={asset[1]} alt="Ethereum Logo"/>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div>{asset[0]}</div>
                                            <div className="flex flex-row items-center space-x-3">
                                                <div className="rounded-full border-2 border-green-500 text-green-500 px-2">{asset[2]} Weeks</div>
                                                <div className="rounded-full border-2 border-blue-500 text-blue-500 px-2">{asset[3]}</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/** APR */}
                                    <div className="flex flex-row justify-between">
                                        <div>
                                            APY:
                                        </div>
                                        <div>
                                            5%
                                        </div>
                                    </div>
                                    {/** Stablecoin amount */}
                                    <div className="flex flex-col">
                                        <div className="text-sm text-indigo-500">
                                            USDC BALANCE
                                        </div>
                                        <div>
                                            0
                                        </div>
                                    </div>
                                    {/** Asset amount */}
                                    <div className="flex flex-col">
                                        <div className="text-sm text-indigo-500">
                                            {asset[0]} BALANCE
                                        </div>
                                        <div>
                                            0
                                        </div>
                                    </div>
                                    {/** Withdraw Early */}
                                    <div className="flex flex-row justify-center">
                                        <button className="bg-indigo-500 rounded-2xl px-4 py-2 text-white">
                                            WITHDRAW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
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