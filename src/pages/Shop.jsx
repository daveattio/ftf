import React, { useState } from 'react'
import { shopProducts } from '../data'
import { useCart } from '../context/CartContext'
import ProductModal from '../components/ProductModal'

const Shop = () => {
  const { addToCart } = useCart()
  const [selectedProduct, setSelectedProduct] = useState(null)

  const openProductDetail = (product) => {
    setSelectedProduct(product)
    // Bootstrap modal show is handled via data-bs-toggle in the button
  }

  return (
    <section id="boutique" className="py-5 bg-light">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3">BOUTIQUE OFFICIELLE</span>
          <h2>ÉQUIPEZ-VOUS COMME UN PRO</h2>
          <p className="text-muted">Produits officiels de la Fédération Togolaise de Football</p>
        </div>

        <div className="row g-4">
          {shopProducts.map((product, idx) => (
            <div
              key={product.id}
              className="col-lg-3 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={100 * (idx + 1)}
            >
              <div className="card shop-card border-0 shadow-sm">
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
                <div className="p-3 bg-light rounded-4 mb-3">
                  <img
                    src={product.image}
                    className="card-img-top img-fluid"
                    alt={product.name}
                    style={{ maxHeight: '200px', objectFit: 'contain' }}
                  />
                </div>
                <div className="card-body p-0">
                  <h5 className="card-title mb-1">{product.name}</h5>
                  <p className="product-price text-primary fw-bold">{product.price}</p>

                  <button
                    className="btn btn-primary w-100 rounded-3 py-2 fw-semibold mt-auto"
                    data-bs-toggle="modal"
                    data-bs-target="#productModal"
                    onClick={() => openProductDetail(product)}
                  >
                    <i className="fas fa-eye me-2"></i>Voir le détail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Cart Button for Mobile if needed, or just link to drawer */}
        <div className="text-center mt-5" data-aos="fade-up">
          <button
            className="btn btn-dark btn-lg px-5 py-3 rounded-pill shadow-lg"
            data-bs-toggle="offcanvas"
            data-bs-target="#cartDrawer"
          >
            <i className="fas fa-shopping-basket me-2"></i>VOIR MON PANIER
          </button>
        </div>
      </div>

      <ProductModal product={selectedProduct} />
    </section>
  )
}

export default Shop
