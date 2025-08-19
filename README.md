# 🛒 Catalog App — React (Interview Exercise)

A small React web app that displays a catalog of items with search, filters, sorting, and favourites support.

---

## 🚀 How to Run

```bash
# Clone repo
git clone <your-repo-url>
cd catalog-app

# Install dependencies
npm install


# Start dev server
npm start


Assumptions

Each item in items.json has a unique id, name, price, rating, and category.
Data is fetched from a static JSON file (simulating an API with artificial delay).
All filtering and sorting are client-side only.
Favourites are stored in localStorage for persistence across page reloads.
The app is expected to run locally with npm start .


Completed:
Search by name (debounced).
Category filter.
Sorting by price and rating (asc/desc).
Favourites toggle + persistence in localStorage.
Show favourites only filter.
Loading state + empty state handling.
Minimal but clean bootstrap UI.

Skipped:
No backend integration (static JSON only).
No client-side pagination.
Unit Tests
