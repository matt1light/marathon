import React from 'react';
import Card from '../Cards/Card';

export const Pool = (props) => {
    const {asset, logo, weeks, day, usdcAmount, assetAmount, apy, depositsEnabled, approved, assetPrice, tvl} = props;

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
                <div className="flex flex-row justify-between">
                    <div>
                        TVL:
                    </div>
                    <div>
                        ${tvl}
                    </div>
                </div>
                {/** Stablecoin amount */}
                <Balance assetName="USDC" assetAmount={usdcAmount} assetPrice={1.01}/>
                {/** Asset amount */}
                <Balance assetName={asset} assetAmount={assetAmount} assetPrice={assetPrice}/>
                {/** Buttons */}
                <div className="flex flex-row justify-center">
                    <PoolButtons depositsEnabled={depositsEnabled} approved={approved}/>
                </div>
            </div>
        </Card>
    )
}

const Balance = (props) => {
    const {assetName, assetAmount, assetPrice} = props;

    return <div className="flex flex-col">
        <div className="text-sm text-green-600 font-semibold">
            {assetName} BALANCE
        </div>
        <div className="text-2xl">
            {assetAmount}
        </div>
        <div className="text-xs text-gray-400">
            ${assetPrice*assetAmount}
        </div>
    </div>
}

const PoolButtons = (props) => {
    const {depositsEnabled, approved} = props;

    return (
        depositsEnabled ?
        <div className="space-x-4">
            <button className={`bg-green-700 rounded-2xl px-4 py-2 text-white hover:bg-green-600 ${approved ? 'opacity-50 cursor-not-allowed' : ''}`}>
                APPROVE
            </button>
            <button className={`bg-green-700 rounded-2xl px-4 py-2 text-white hover:bg-green-600 ${approved ? '' : 'opacity-50 cursor-not-allowed'}`}>
                DEPOSIT
            </button>
        </div> : 
        <button className="bg-green-700 rounded-2xl px-4 py-2 text-white hover:bg-green-600">
            WITHDRAW
        </button>
    )
}

export default Pool;