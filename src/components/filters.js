import React, { useEffect, useState } from 'react'
import { debounce } from 'lodash'

const Filters = (props) => {
    const { categories, category, setCategory, sort, setSort, showFavs, setShowFavs, setSearch } = props

    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        const handler = debounce(() => {
            setSearch(searchInput)
        }, 300)
        handler()
        return () => handler.cancel()
    }, [searchInput, setSearch])


    return (
        <div className='flex flex-wrap gap-4 items-center mb-4'>

            {/*Search */}
            <input
                type='text'
                placeholder='Search by name'
                className='border p-2 m-2 rounded'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}>
            </input>

            {/* Category */}
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 m-2 rounded"
            >
                <option value="All">All</option>
                {categories.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
            </select>

            {/* Sorting */}
            <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border p-2 m-2 rounded"
            >
                <option value="">Sort</option>
                <option value="price-asc">Price ↑</option>
                <option value="price-desc">Price ↓</option>
                <option value="rating-asc">Rating ↑</option>
                <option value="rating-desc">Rating ↓</option>
            </select>

            {/* Favourites toggle */}
            <label className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={showFavs}
                    onChange={(e) => setShowFavs(e.target.checked)}
                />
                Show favourites only
            </label>
        </div>
    )
}

export default Filters