import React from 'react';
import Card from '../Card';

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

export default AssetBreakdown;