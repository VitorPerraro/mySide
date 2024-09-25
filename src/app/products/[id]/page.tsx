import ProductDetails from './ProductDetails';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

const fetchProduct = async (id: string): Promise<Product | null> => {
  try {
    const response = await fetch(`https://fakestoreapi.in/api/products/${id}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar detalhes do produto');
    }
    
    const data = await response.json();
    return data.product;
  } catch (err) {
    console.error("Erro ao buscar produto:", err);
    return null;
  }
};

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  if (!product) {
    return <div>Erro ao carregar o produto.</div>;
  }
  return <ProductDetails product={product} />;
};

export default ProductPage;
