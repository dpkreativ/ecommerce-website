import { useEffect, useState } from 'react'
import './App.css'

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

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
    <main id='main'>
      {
        products.map((product) => (
          <div className='product' key={product.id}>
            <div className='product-image'>
              <img src={product.image} alt={product.title} />
            </div>
            <h2 className='product-title'>{product.title}</h2>
            <p className='product-price'>${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))
      }
    </main>
  )
}

export default App
