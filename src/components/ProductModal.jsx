import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductModal = ({ product }) => {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[0] : 'Unique');

    if (!product) return null;

    const handleAddToCart = () => {
        addToCart(product, selectedSize);
        // We close the modal manually if needed or let the user close it
    };

    return (
        <div className="modal fade" id="productModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content border-0 rounded-4 shadow-lg">
                    <div className="modal-header border-0 pb-0">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-4 p-lg-5">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="product-modal-img text-center p-3 bg-light rounded-4 h-100 d-flex align-items-center justify-content-center">
                                    <img src={product.image} alt={product.name} className="img-fluid rounded-4 shadow-sm" style={{ maxHeight: '400px', objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-modal-info">
                                    <span className="badge bg-primary-subtle text-primary mb-2 px-3 py-2 rounded-pill">Officiel FTF</span>
                                    <h2 className="fw-bold mb-3">{product.name}</h2>
                                    <h3 className="text-primary fw-bold mb-4">{product.price}</h3>

                                    <p className="text-muted mb-4">
                                        Qualité premium, textile respirant. Idéal pour supporter les Éperviers au stade ou à la ville. Produit certifié par la Fédération Togolaise de Football.
                                    </p>

                                    {product.sizes && (
                                        <div className="mb-4">
                                            <label className="form-label fw-bold small text-uppercase text-muted">Choisir la taille</label>
                                            <div className="d-flex gap-2">
                                                {product.sizes.map((size) => (
                                                    <button
                                                        key={size}
                                                        className={`btn btn-outline-secondary size-btn ${selectedSize === size ? 'active' : ''}`}
                                                        onClick={() => setSelectedSize(size)}
                                                    >
                                                        {size}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="d-grid gap-3">
                                        <button
                                            className="btn btn-primary py-3 fw-bold rounded-3"
                                            onClick={handleAddToCart}
                                            data-bs-dismiss="modal"
                                        >
                                            <i className="fas fa-shopping-cart me-2"></i>AJOUTER AU PANIER
                                        </button>
                                        <div className="d-flex align-items-center justify-content-center gap-4 text-muted small mt-2">
                                            <span><i className="fas fa-truck me-2"></i>Livraison rapide</span>
                                            <span><i className="fas fa-shield-alt me-2"></i>Paiement sécurisé</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
