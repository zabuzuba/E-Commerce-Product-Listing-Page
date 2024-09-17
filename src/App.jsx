import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 10;

  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${itemsPerPage * page}`);
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  // Filtered products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === 'all' || product.category === categoryFilter)
    );
  }, [products, searchTerm, categoryFilter]);

  return (
    <div className="App">
      <h1>E-Commerce Product Listing</h1>

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Category Filter */}
      <CategoryFilter categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />

      {/* Product Grid */}
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}

      {/* Load More */}
      <LoadMoreButton setPage={setPage} loading={loading} />
    </div>
  );
};

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    type="text"
    placeholder="Search products..."
    className="search-bar"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

const CategoryFilter = ({ categoryFilter, setCategoryFilter }) => (
  <select className="category-filter" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
    <option value="all">All Categories</option>
    <option value="electronics">Electronics</option>
    <option value="jewelery">Jewelery</option>
    <option value="men's clothing">Men's Clothing</option>
    <option value="women's clothing">Women's Clothing</option>
  </select>
);

const ProductGrid = ({ products }) => (
  <div className="product-grid">
    {products.map(product => (
      <div className="product-card" key={product.id}>
        <img src={product.image} alt={product.title} className="product-image" />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </div>
    ))}
  </div>
);

const LoadMoreButton = ({ setPage, loading }) => (
  <button onClick={() => setPage(prev => prev + 1)} disabled={loading} className="load-more-btn">
    {loading ? 'Loading...' : 'Load More'}
  </button>
);

export default App;
