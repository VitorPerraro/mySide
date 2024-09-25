import ProductList from './ProductsList';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';

import styles from '../styles/product.module.css'

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}


const ProductsPage = async () => {
  let products: Product[] = [];
  let categories: string[] = [];
  let error = null;

  try {
    const res = await fetch('https://fakestoreapi.in/api/products');
    if (!res.ok) {
      throw new Error('Erro ao buscar produtos');
    }

    const data = await res.json();
    products = data.products;

    const categoriesSet = new Set<string>(products.map((product: Product) => product.category));
    categories = Array.from(categoriesSet);
  } catch (err: any) {
    console.error("Erro ao buscar produtos:", err.message);
    error = err.message;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <>
    {/* Botão para ver o carrinho */}
    <div className={styles.cartButtonContainer}>
      <Link href="/cart">
        <button className={styles.cartButton}>
          Ver Carrinho
        </button>
      </Link>
    </div>
    <ProductList products={products} categories={categories} />
  </>

  );
};

export default ProductsPage;
