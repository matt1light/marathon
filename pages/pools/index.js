import Head from 'next/head';
import ActivePools from '../../components/ActivePools';
import Body from '../../components/Body';
import CardGrid from '../../components/CardGrid';
import { useState } from 'react';
import TopCard from '../../components/TopCard';

export const Pools = () => {
    return <div>
        {/** Header */}
        <Head>
            <title>Turtle finance ponds</title>
        </Head>
        <Body>
            {/** Search bar */}
            <TopCard>
                <SearchBar/>
            </TopCard>
            <CardGrid>
                {/** Pools that match the search */}
                <ActivePools/>
            </CardGrid>
        </Body>
        <div>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    </div>
}

const SearchBar = (props) => {
    const {} = props;

    const initialState = {
        asset: 'Any',
        day: 'Any',
        numberOfWeeks: 10,
    }

    const [formData, setFormData] = useState(initialState)

    const handleClearFilters = (e)  => {
        e.preventDefault();
        setFormData(initialState)
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const assets = [
        {
            name: 'Any'
        },
        {
            name: 'ETH'
        },
        {
            name: 'BTC'
        }
    ]

    const days = [
        'Any',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]

    return <form className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:justify-between sm:space-x-4">
        {/** Asset */}
        <div className="flex flex-col sm:w-1/4">
            <label
                for="asset"
                className="text-sm"
            >
                Asset
            </label>
            <select
                id="asset"
                name="asset"
                onChange={handleChange}
                value={formData.asset}
            >
                {
                    assets.map((asset) => {
                        return <option key={asset.name}>
                            {asset.name}
                        </option>
                    })
                }
            </select>
        </div>
        {/** Day */}
        <div className="flex flex-col sm:w-1/4">
            <label
                for="day"
                className="text-sm"
            >
                Day
            </label>
            <select
                id="day"
                name="day"
                onChange={handleChange}
                value={formData.day}
            >
                {
                    days.map((day) => {
                        return <option key={day}>
                            {day}
                        </option>
                    })
                }
            </select>
        </div>
        {/** Weeks */}
        <div className="flex flex-col sm:w-1/4">
            <label
                for="numberOfWeeks"
                className="text-sm"
            >
                Weeks
            </label>
            <input
                type="number"
                id="numberOfWeeks"
                name="numberOfWeeks"
                onChange={handleChange}
                value={formData.numberOfWeeks}
            />
        </div>
        <div className="flex flex-col justify-center sm:w-1/4">
            <button
                className="bg-indigo-500 rounded-xl px-4 py-2 text-white m-auto"
                onClick={handleClearFilters}
            >
                Clear Filters
            </button>
        </div>
    </form>
}


export default Pools;