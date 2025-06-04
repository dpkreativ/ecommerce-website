import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  console.log("Products:", products);
  return (
    <main></main>
  )
}

export default App
