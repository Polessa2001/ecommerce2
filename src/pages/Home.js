import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import CartItem from '../components/CartItem';

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  // Check if products or products.data is undefined
  if (!products || !products.data) {
    return <div>Loading...</div>; // or any other fallback UI
  }

  console.log(products);
  const filteredProducts = products.data.filter((item) => {
    return item.category.name === "men's fashion" || item.category.name === "women's fashion";
  });
  console.log(filteredProducts);

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product, index) => (
              <div className="w-full h-[300px] bg-pink-200 mb-4" key={product.id || index}>
                {product.title}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default Home;
