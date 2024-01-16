import axios from "axios";
import { useEffect, useState } from "react";
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: { rate: number; count: number };
  category: string;
};
export const useGetAllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data } = await axios.get<Product[]>(
        "https://fakestoreapi.com/products"
      );
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return { products, loading };
};
