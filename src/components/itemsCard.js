import React from 'react'

const ItemsCard = (props) => {
    const { item, toggleFavourite, isFavourite } = props

    return (
        <div className="border p-4 rounded shadow flex justify-between items-center">
            <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.category}</p>
                <p>💲 {item.price.toFixed(2)}</p>
                <p>⭐ {item.rating}</p>
            </div>
            <button
                onClick={() => toggleFavourite(item.id)}
                className="text-2xl"
                aria-label="Toggle favourite"
            >
                {isFavourite ? "★" : "☆"}
            </button>
        </div>
    )
}

export default ItemsCard