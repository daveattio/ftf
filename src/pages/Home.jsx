import React from 'react'
import { Link } from 'react-router-dom'
import { upcomingMatches, newsItems } from '../data'

const Home = () => {
  const nextMatch = upcomingMatches[0]

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content mx-auto" style={{ maxWidth: '900px' }}>
            <h1 data-aos="fade-down">
              FÉDÉRATION TOGOLAISE DE FOOTBALL
            </h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Bienvenue sur la plateforme officielle du football togolais.
              Suivez les Éperviers et vibrez au rythme de notre passion commune.
            </p>
            <div className="hero-buttons d-flex justify-content-center gap-3" data-aos="fade-up" data-aos-delay="400">
              <Link to="/matchs" className="btn btn-primary">
                Voir les matchs
              </Link>
              <Link to="/boutique" className="btn btn-outline-light">
                Boutique officielle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white">
        <div className="container">
          <div className="row justify-content-center">
            {[
              { label: 'Joueurs sélectionnés', value: '23', icon: 'fa-users' },
              { label: 'Matchs cette saison', value: '12', icon: 'fa-calendar-check' },
              { label: 'Victoires', value: '8', icon: 'fa-trophy' },
              { label: 'Produits vendus', value: '1500+', icon: 'fa-shopping-bag' }
            ].map((stat, idx) => (
              <div key={idx} className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="text-center p-4 border-end border-light">
                  <i className={`fas ${stat.icon} fa-2x text-primary mb-3`}></i>
                  <h3 className="fw-bold mb-1">{stat.value}</h3>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {nextMatch && (
        <section className="py-5 bg-light">
          <div className="container">
            <div className="section-title">
              <h2 data-aos="fade-up">PROCHAIN MATCH</h2>
              <p data-aos="fade-up" data-aos-delay="100">Ne manquez pas le prochain rendez-vous des Éperviers</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10" data-aos="zoom-in">
                <div className="match-card card shadow-lg border-0">
                  <div className="card-body p-5">
                    <div className="text-center mb-4">
                      <span className="badge bg-danger px-3 py-2 rounded-pill">ÉLIMINATOIRES CAN 2025</span>
                    </div>
                    <div className="match-teams d-flex align-items-center justify-content-between">
                      <div className="team text-center flex-grow-1">
                        <img
                          src={`https://via.placeholder.com/120?text=${nextMatch.home}`}
                          alt={nextMatch.home}
                          className="team-logo mb-3"
                          loading="lazy"
                          decoding="async"
                        />
                        <h3 className="fw-bold">{nextMatch.home}</h3>
                      </div>

                      <div className="match-info text-center px-4">
                        <div className="match-score-badge mb-2">VS</div>
                        <div className="text-muted small fw-bold">15 MARS 2024</div>
                      </div>

                      <div className="team text-center flex-grow-1">
                        <img
                          src={`https://via.placeholder.com/120?text=${nextMatch.away}`}
                          alt={nextMatch.away}
                          className="team-logo mb-3"
                          loading="lazy"
                          decoding="async"
                        />
                        <h3 className="fw-bold">{nextMatch.away}</h3>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <p className="mb-2"><i className="fas fa-map-marker-alt text-primary me-2"></i>{nextMatch.venue}</p>
                      <p className="text-muted"><i className="fas fa-clock text-primary me-2"></i>20:00 (GMT)</p>
                      <Link to={`/matchs/${nextMatch.id}`} className="btn btn-primary mt-3 px-5 py-2">Réserver & Détails</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section id="actualites" className="py-5">
        <div className="container">
          <div className="section-title">
            <h2 data-aos="fade-up">DERNIÈRES ACTUALITÉS</h2>
            <p data-aos="fade-up" data-aos-delay="100">Vivez toute l'actualité du foot togolais en direct</p>
          </div>
          <div className="row">
            {newsItems.map((item, idx) => (
              <div
                key={item.id}
                className="col-lg-4 col-md-6 mb-4"
                data-aos="fade-up"
                data-aos-delay={100 * (idx + 1)}
              >
                <div className="card news-card h-100">
                  <div className="overflow-hidden rounded-top-4">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt="News"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="card-body pt-4 px-0">
                    <div className="news-date">{item.date}</div>
                    <h4 className="news-title">{item.title}</h4>
                    <p className="text-muted mb-3">{item.excerpt}</p>
                    <Link to={`/actualites/${item.id}`} className="btn btn-outline-primary rounded-pill px-4">
                      Lire la suite
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4" data-aos="fade-up">
            <Link to="/actualites" className="btn btn-link text-primary fw-bold text-decoration-none">
              Voir toutes les actualités <i className="fas fa-long-arrow-alt-right ms-2"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

