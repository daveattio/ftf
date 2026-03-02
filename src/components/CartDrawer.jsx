import React from 'react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartDrawer" aria-labelledby="cartDrawerLabel">
            <div className="offcanvas-header bg-primary text-white">
                <h5 className="offcanvas-title fw-bold" id="cartDrawerLabel">
                    <i className="fas fa-shopping-basket me-2"></i>VOTRE PANIER
                </h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {cartItems.length === 0 ? (
                    <div className="text-center py-5">
                        <i className="fas fa-shopping-cart fa-3x text-light mb-3"></i>
                        <p className="text-muted">Votre panier est vide</p>
                        <button className="btn btn-primary mt-3" data-bs-dismiss="offcanvas">Continuer mes achats</button>
                    </div>
                ) : (
                    <>
                        <div className="cart-items-list">
                            {cartItems.map((item, idx) => (
                                <div key={`${item.id}-${item.size}`} className="cart-item-row d-flex align-items-center mb-4 pb-3 border-bottom">
                                    <div className="cart-item-img me-3">
                                        <img src={item.image} alt={item.name} className="rounded" />
                                    </div>
                                    <div className="cart-item-info flex-grow-1">
                                        <h6 className="mb-0 fw-bold">{item.name}</h6>
                                        <p className="text-muted small mb-2">Taille: {item.size}</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="quantity-controls d-flex align-items-center">
                                                <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQuantity(item.id, item.size, -1)}>-</button>
                                                <span className="mx-2 fw-bold">{item.quantity}</span>
                                                <button className="btn btn-sm btn-outline-secondary" onClick={() => updateQuantity(item.id, item.size, 1)}>+</button>
                                            </div>
                                            <span className="fw-bold text-primary">{item.price}</span>
                                        </div>
                                    </div>
                                    <button className="btn text-danger ms-2" onClick={() => removeFromCart(item.id, item.size)}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-footer mt-auto pt-4 border-top">
                            <div className="d-flex justify-content-between mb-3">
                                <span className="h5 mb-0">TOTAL</span>
                                <span className="h5 mb-0 fw-bold text-primary">{cartTotal.toLocaleString()} FCFA</span>
                            </div>
                            <button className="btn btn-primary w-100 py-3 fw-bold mb-2" onClick={() => alert('Commande validée ! (Simulation)')}>
                                VALIDER LA COMMANDE
                            </button>
                            <button className="btn btn-outline-danger w-100 py-2 btn-sm" onClick={clearCart}>
                                VIDER LE PANIER
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
