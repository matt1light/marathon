import React from 'react';
import Card from './Card';

export const Pool = (props) => {
    const {asset, logo, weeks, day, usdcAmount, assetAmount, apy, depositsEnabled, approved} = props;

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
                {/** Buttons */}
                <div className="flex flex-row justify-center">
                    <PoolButtons depositsEnabled={depositsEnabled} approved={approved}/>
                </div>
            </div>
        </Card>
    )
}

const PoolButtons = (props) => {
    const {depositsEnabled, approved} = props;

    return (
        depositsEnabled ?
        <div className="space-x-4">
            <button className={`bg-indigo-500 rounded-2xl px-4 py-2 text-white hover:bg-indigo-400 ${approved ? 'opacity-50 cursor-not-allowed' : ''}`}>
                APPROVE
            </button>
            <button className={`bg-indigo-500 rounded-2xl px-4 py-2 text-white hover:bg-indigo-400 ${approved ? '' : 'opacity-50 cursor-not-allowed'}`}>
                DEPOSIT
            </button>
        </div> : 
        <button className="bg-indigo-500 rounded-2xl px-4 py-2 text-white hover:bg-indigo-400">
            WITHDRAW
        </button>
    )
}

export default Pool;