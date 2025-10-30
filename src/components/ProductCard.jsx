import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    onAddToCart(product);
  };

  return (
    <div className="product-card" onClick={handleProductClick}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {!product.inStock && <div className="out-of-stock">Fora de Estoque</div>}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <span className="product-price">R$ {product.price.toFixed(2)}</span>
          <button 
            className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            {product.inStock ? '➕ Adicionar' : 'Indisponível'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;