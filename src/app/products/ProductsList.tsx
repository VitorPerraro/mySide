"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/product.module.css';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

interface ProductsProps {
  products: Product[];
  categories: string[];
}

const ProductList: React.FC<ProductsProps> = ({ products, categories }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    setCurrentPage(1); 
  };

  const filteredProducts = products.filter(product => {
    const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return matchesSearchTerm && matchesCategory;
  });

 
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className={styles.container}>
      <h1>Lista de Produtos</h1>
      <input
        type="text"
        placeholder="Pesquisar produtos..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />

      <div className={styles.filterContainer}>
        <h3>Filtrar por Categoria:</h3>
        {categories.map(category => (
          <label key={category} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>

      <div className={styles.grid}>
        {currentProducts.map(product => (
          <Link key={product.id} href={`/products/${product.id}`} className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.imagem} />
            <h2>{product.title}</h2>
            <p className={styles.preco}>{`R$ ${product.price.toFixed(2)}`}</p>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={styles.paginationButton}
          >
            Anterior
          </button>
          <span>Página {currentPage} de {totalPages}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={styles.paginationButton}
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
