import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-4" data-aos="fade-up">
            <div className="d-flex align-items-center mb-4">
              <img src={logoImg} alt="FTF Logo" className="me-3" style={{ height: '50px' }} />
              <h4 className="fw-bold mb-0 text-white">FTF<span className="text-primary">.</span></h4>
            </div>
            <p className="opacity-75 mb-4">
              La Fédération Togolaise de Football s'engage pour le développement du sport roi sur tout le territoire national. Ensemble, portons les Éperviers vers les sommets.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" title="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <h5>Navigation</h5>
            <ul className="footer-links">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/equipes">Équipes</Link></li>
              <li><Link to="/matchs">Matchs</Link></li>
              <li><Link to="/actualites">Actualités</Link></li>
              <li><Link to="/boutique">Boutique</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <h5>Contact Info</h5>
            <ul className="footer-links">
              <li>
                <div className="d-flex align-items-center">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  <span>Lomé, Togo</span>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <i className="fas fa-phone text-primary me-2"></i>
                  <span>+228 22 21 23 45</span>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  <span>info@ftf.tg</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <h5>Newsletter</h5>
            <p className="small opacity-75 mb-4">Abonnez-vous pour recevoir les dernières nouvelles et exclusivités.</p>
            <div className="newsletter-box input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Votre email"
              />
              <button className="btn btn-primary" type="button">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p className="mb-0">&copy; {new Date().getFullYear()} Fédération Togolaise de Football. Tous droits réservés.</p>
          <div className="mt-2 small opacity-50">
            Designed for Excellence
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

