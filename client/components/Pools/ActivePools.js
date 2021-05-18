import React from 'react';
import Pool from './Pool';

const activePools = [
    {
        asset: 'ETH',
        logo: '/Ethereum_logo.svg',
        weeks: 5,
        day: 'Monday',
        depositsEnabled: true,
        approved: true,
        apy: 5,
        assetAmount: 1,
        assetPrice: 4000,
        usdcAmount: 1000,
        tvl: 100000
    },
    {
        asset: 'BTC',
        logo: '/wrapped-bitcoin-wbtc-logo.svg',
        weeks: 10,
        day: 'Tuesday',
        depositsEnabled: false,
        approved: true,
        apy: 15,
        assetPrice: 50000,
        assetAmount: 0.001,
        usdcAmount: 1000,
        tvl: 100000

    },
    {
        asset: 'ETH',
        logo: '/Ethereum_logo.svg',
        weeks: 2,
        day: 'Sunday',
        depositsEnabled: true,
        approved: false,
        apy: 12,
        assetAmount: 0.5,
        assetPrice: 4000,
        usdcAmount: 1000,
        tvl: 100000
    },
]

export const ActivePools = () => {
    return activePools.map((asset) => {
        return <Pool
            key={asset}
            {...asset}
        />
    })
}

export default ActivePools;