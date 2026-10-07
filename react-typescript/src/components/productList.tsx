import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string
};

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export const ProductList=() =>{
  const [products, setProducts] = useState<Product[]>([]);
  
  const fetchProducts = async (): Promise<void> => {
  const response = await fetch("https://dummyjson.com/products");
  const data: ProductResponse = await response.json();
  setProducts(data.products);
};
  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>₹{item.description}</p>
        </div>
      ))}
    </div>
  );
}