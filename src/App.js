
import { useEffect, useMemo, useState } from 'react';
import './App.css';

import ItemsCard from './components/itemsCard'
import Loader from './components/loader';
import Filters from './components/filters';

import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('')
  const [showFavs, setShowFavs] = useState(false)

  const [favourites, setFavourites] = useLocalStorage({ key: "favourites", initialValue: [] });

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      fetch('/items.json')
        .then(res => res.json())
        .then(data => {
          setItems(data)
          setLoading(false)
        }
        )
    }, 1000)
  }, [])

  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const categories = [...new Set(items.map((i) => i.category))]

  const filtered = useMemo(() => {
    let data = [...items]

    if (search)
      data = data.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase()))

    if (category !== "All") {
      data = data.filter((i) => i.category === category);
    }

    if (showFavs) {
      data = data.filter((i) => favourites.includes(i.id));
    }

    if (sort) {
      const [field, order] = sort.split("-");
      data.sort((a, b) =>
        order === "asc" ? a[field] - b[field] : b[field] - a[field]
      );
    }

    return data
  }, [items, search, showFavs, category, sort, favourites])

  if (isLoading) return <Loader />

  return (
    <div className="App">
      <div className='max-w-3xl mx-auto p-6'>
        <h1> Catelog</h1>
        <Filters
          categories={categories}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
          showFavs={showFavs}
          setShowFavs={setShowFavs}
        />

        {filtered.length === 0 ? (
          <p className="text-center text-gray-600">No items match your filters </p>
        ) : (
          <div className="grid gap-4">
            {filtered.map((item) => (
              <ItemsCard
                key={item.id}
                item={item}
                isFavourite={favourites.includes(item.id)}
                toggleFavourite={toggleFavourite}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
