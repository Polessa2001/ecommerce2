import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import CartItem from '../components/CartItem';
import Product from '../components/Product'
const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  // Check if products or products.data is undefined
  if (!products || !products.data) {
    return <div>Loading...</div>; // or any other fallback UI
  }

  console.log(products);
  const filteredProducts = products.data.filter((item) => {
    return item.category.name !=="tools & hardware" && item.category.name !=="phone & tablets";
  });
  console.log(filteredProducts);

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product, index) => (
             <Product key={product._id}/>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default Home;
