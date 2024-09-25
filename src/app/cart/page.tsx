"use client";
import React from 'react';
import { useCart } from '../../context/CartContext';
import styles from '../styles/cart.module.css';

const CartPage: React.FC = () => {
const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={styles.container}>
      <h1>Carrinho de Compras</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div>
                <h2>{item.title}</h2>
                <p>Quantidade: {item.quantity}</p>
                <p>Preço: R$ {item.price.toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
                  Remover
                </button>
              </div>
            </div>
          ))}
          <h3>Total: R$ {totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
