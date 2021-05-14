import React from 'react';
import Pool from './Pool';

const activePools = [
    {
        asset: 'ETH',
        logo: '/Ethereum_logo.svg',
        weeks: 5,
        day: 'Monday',
        depositsEnabled: true,
        approved: true
    },
    {
        asset: 'BTC',
        logo: '/wrapped-bitcoin-wbtc-logo.svg',
        weeks: 10,
        day: 'Tuesday',
        depositsEnabled: false,
        approved: true
    },
    {
        asset: 'ETH',
        logo: '/Ethereum_logo.svg',
        weeks: 2,
        day: 'Sunday',
        depositsEnabled: true,
        approved: false
    },
]

export const ActivePools = () => {
    return activePools.map((asset) => {
        return <Pool
            key={asset}
            asset={asset.asset}
            logo={asset.logo}
            weeks={asset.weeks}
            day={asset.day}
            usdcAmount={0}
            assetAmount={0}
            apy={5}
            depositsEnabled={asset.depositsEnabled}
            approved={asset.approved}
        />
    })
}

export default ActivePools;