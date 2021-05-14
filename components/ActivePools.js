import React from 'react';
import Pool from './Pool';

export const ActivePools = () => {
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

export default ActivePools;