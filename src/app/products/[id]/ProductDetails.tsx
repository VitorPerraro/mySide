"use client";

import React from 'react';
import styles from '../../styles/productDetails.module.css';
import { useCart } from '../../../context/CartContext';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  const priceDisplay = product.price !== undefined ? `R$ ${product.price.toFixed(2)}` : 'Preço não disponível';

  return (
    <div className={styles.container}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} className={styles.image} style={{ maxWidth: '100%' }} />
      <p><strong>Preço:</strong> {priceDisplay}</p>
      <p><strong>Categoria:</strong> {product.category}</p>
      <p><strong>Descrição:</strong> {product.description}</p>

      <button className={styles.addButton} onClick={handleAddToCart}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductDetails;
