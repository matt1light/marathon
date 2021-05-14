import Head from 'next/head';

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

const Navbar = () => {
    return (
        <>
            <div className="h-16 md:h-20"/>
            <div className="md:hidden px-6 py-4 flex flex-row justify-between items-center fixed w-full h-16 top-0 bg-gray-100">
                <div className="flex flex-row justify-start space-x-2">
                    <button class="h-8 w-8 rounded-full hover:bg-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <button class="h-8 w-8 rounded-full">
                        <img className="h-7 w-7" src={"/fda-runner.svg"} alt="marathon logo"/>
                    </button>
                </div>
                <button className="rounded-full bg-indigo-500 px-5 py-1 text-white flex-row justify-center items-center hover:bg-indigo-400">
                    CONNECT
                </button>
            </div>
            <div className="hidden md:flex px-6 py-4 flex-row justify-between items-center fixed w-full h-20 top-0 bg-gray-100">
                <div className="flex flex-row justify-start space-x-2">
                    <button class="h-8 w-8 rounded-full hover:bg-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <button class="h-8 w-8 rounded-full">
                        <img className="h-7 w-7" src={"/fda-runner.svg"} alt="marathon logo"/>
                    </button>
                </div>
                <button className="rounded-full bg-indigo-500 px-5 py-1 text-white flex-row justify-center items-center hover:bg-indigo-400">
                    CONNECT
                </button>
            </div>
        </>
    )
}

const Warning = () => {
    return <Card className="max-w-2xl m-auto">
        <p className="text-sm">Using Smart Contracts, Tokens, and Crypto is always a risk. DYOR before investing.</p>
    </Card>
}

const Summary = () => {
    return <Card>
        <div className="flex flex-col space-y-2 bg-gray-200">
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
    </Card>
}

const AssetBreakdown = () => {
    return <Card>
        <h2 className="text-3xl">Asset Breakdown</h2>
        <div className="border-b-2 border-gray-100 shadow-inner"/>
        <div className="grid grid-rows-4 grid-cols-4 gap-2 p-2">
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
                    {
                        asset: 'WBTC',
                        amount: 0.001,
                        price: 48000
                    },
                ].map((asset) => {
                    return <>
                        <div>
                            ${asset.price*asset.amount}
                        </div>
                        <div>
                            {asset.asset}
                        </div>
                        <div>
                            {asset.amount}
                        </div>
                        <div>
                            ${asset.price}
                        </div>
                    </>
                })
            }
        </div>
    </Card>
}

const ActivePools = () => {
    return [['ETH', '/Ethereum_logo.svg', 5, 'Monday'], ['BTC', '/wrapped-bitcoin-wbtc-logo.svg', 10, 'Tuesday'], ['ETH', '/Ethereum_logo.svg', 2, 'Sunday']].map((asset) => {
        return <Pool
            key={asset}
            asset={asset[0]}
            logo={asset[1]}
            weeks={asset[2]}
            day={asset[3]}
            usdcAmount={0}
            assetAmount={0}
            apy={5}
        />
    })
}

const Pool = (props) => {
    const {asset, logo, weeks, day, usdcAmount, assetAmount, apy} = props;

    return (
        <Card>
            <div className="flex flex-col space-y-2">
                {/** Pool Header */}
                <div className="flex flex-row justify-between items-center py-1">
                    <div className="h-5 w-5 flex items-center justify-center">
                        <img src={logo} alt="Ethereum Logo"/>
                    </div>
                    <div className="flex flex-col items-end">
                        <div>{asset}</div>
                        <div className="flex flex-row items-center space-x-3">
                            <div className="rounded-full border-2 border-green-500 text-green-500 px-2">{weeks} Weeks</div>
                            <div className="rounded-full border-2 border-blue-500 text-blue-500 px-2">{day}</div>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 border-gray-100 shadow-inner"/>
                {/** APR */}
                <div className="flex flex-row justify-between">
                    <div>
                        APY:
                    </div>
                    <div>
                        {apy}%
                    </div>
                </div>
                {/** Stablecoin amount */}
                <div className="flex flex-col">
                    <div className="text-sm text-indigo-500">
                        USDC BALANCE
                    </div>
                    <div className="text-2xl">
                        {usdcAmount}
                    </div>
                </div>
                {/** Asset amount */}
                <div className="flex flex-col">
                    <div className="text-sm text-indigo-500">
                        {asset} BALANCE
                    </div>
                    <div className="text-2xl">
                        {assetAmount}
                    </div>
                </div>
                {/** Withdraw Early */}
                <div className="flex flex-row justify-center">
                    <button className="bg-indigo-500 rounded-2xl px-4 py-2 text-white hover:bg-indigo-400">
                        WITHDRAW
                    </button>
                </div>
            </div>
        </Card>
    )
}

const Card = (props) => {
    const {children, className} = props;

    return (
        <div className={`bg-gray-200 p-6 rounded-xl shadow-xl ${className}`}>
            {children}
        </div>
    )
}



export default Dashboard;