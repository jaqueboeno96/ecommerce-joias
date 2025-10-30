import { useParams, useNavigate } from 'react-router-dom';
import '../components/ProductDetail.css';

const ProductDetail = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="not-found">
          <h2>Produto não encontrado</h2>
          <button onClick={() => navigate('/')}>Voltar para a loja</button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Voltar para a loja
      </button>

      <div className="product-detail">
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        <div className="product-info">
          <div className="product-header">
            <span className="product-category">{product.category}</span>
            <h1 className="product-title">{product.name}</h1>
            <div className="product-rating">
              ⭐⭐⭐⭐⭐ <span className="rating-text">(4.8)</span>
            </div>
          </div>

          <div className="product-price">
            <span className="current-price">R$ {product.price.toFixed(2)}</span>
            <span className="installments">ou 6x de R$ {(product.price / 6).toFixed(2)} sem juros</span>
          </div>

          <div className="product-description">
            <h3>Descrição</h3>
            <p>{product.description}</p>
          </div>

          <div className="product-features">
            <h3>Características</h3>
            <ul>
              <li>✅ Material: Prata 925</li>
              <li>✅ Garantia: 1 ano</li>
              <li>✅ Entrega: 5-7 dias úteis</li>
              <li>✅ Embalagem: Presente inclusa</li>
            </ul>
          </div>

          <div className="product-actions">
            <div className="stock-info">
              {product.inStock ? (
                <span className="in-stock">🟢 Em estoque</span>
              ) : (
                <span className="out-of-stock">🔴 Fora de estoque</span>
              )}
            </div>

            <button 
              className={`add-to-cart-btn large ${!product.inStock ? 'disabled' : ''}`}
              onClick={() => product.inStock && onAddToCart(product)}
              disabled={!product.inStock}
            >
              {product.inStock ? '🛒 Adicionar ao Carrinho' : 'Indisponível'}
            </button>

            <button className="buy-now-btn">
              💎 Comprar Agora
            </button>
          </div>
        </div>
      </div>

      {/* Seção de produtos relacionados */}
      <section className="related-products">
        <h2>Produtos Relacionados</h2>
        <div className="related-grid">
          {products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map(relatedProduct => (
              <div 
                key={relatedProduct.id} 
                className="related-card"
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <img src={relatedProduct.image} alt={relatedProduct.name} />
                <h4>{relatedProduct.name}</h4>
                <p>R$ {relatedProduct.price.toFixed(2)}</p>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;