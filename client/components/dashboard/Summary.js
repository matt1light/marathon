import React from 'react';
import Card from '../Cards/Card';

export const Summary = () => {
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

export default Summary;