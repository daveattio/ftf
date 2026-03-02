import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { upcomingMatches } from '../data'

const Matches = () => {
  const [activeTab, setActiveTab] = useState('upcoming')

  return (
    <section id="matchs" className="py-5 bg-white">
      <div className="container">
        <div className="section-title">
          <h2 data-aos="fade-up">CALENDRIER & RÉSULTATS</h2>
          <p data-aos="fade-up" data-aos-delay="100">Suivez le parcours des Éperviers au fil de la saison</p>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-auto" data-aos="fade-up">
            <div className="btn-group p-1 bg-light rounded-pill">
              <button
                className={`btn rounded-pill px-4 ${activeTab === 'upcoming' ? 'btn-primary shadow' : 'btn-light'}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Prochains Matchs
              </button>
              <button
                className={`btn rounded-pill px-4 ${activeTab === 'results' ? 'btn-primary shadow' : 'btn-light'}`}
                onClick={() => setActiveTab('results')}
              >
                Derniers Résultats
              </button>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-8" data-aos="fade-right">
            <div className="space-y-4">
              {upcomingMatches.map((match, idx) => (
                <div key={match.id} className="card match-card mb-4 border-0 shadow-sm" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="card-body p-4">
                    <div className="row align-items-center text-center">
                      <div className="col-md-4">
                        <div className="fw-bold h5 mb-2">{match.home}</div>
                        <img src={`https://via.placeholder.com/60?text=${match.home.substr(0, 1)}`} alt={match.home} className="rounded-circle bg-light p-2" />
                      </div>
                      <div className="col-md-4 my-3 my-md-0">
                        <div className="badge bg-light text-primary border border-primary px-3 py-2 mb-2">VS</div>
                        <div className="small text-muted fw-bold">
                          {new Date(match.date).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </div>
                        <div className="small text-accent fw-bold">{new Date(match.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div>
                      </div>
                      <div className="col-md-4">
                        <div className="fw-bold h5 mb-2">{match.away}</div>
                        <img src={`https://via.placeholder.com/60?text=${match.away.substr(0, 1)}`} alt={match.away} className="rounded-circle bg-light p-2" />
                      </div>
                    </div>
                    <hr className="my-3 opacity-10" />
                    <div className="text-center mt-3">
                      <Link to={`/matchs/${match.id}`} className="btn btn-link text-primary p-0 btn-sm fw-bold">Détails & Billetterie <i className="fas fa-arrow-right ms-1"></i></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4" data-aos="fade-left">
            <div className="card border-0 shadow-sm p-4 sticky-top" style={{ top: '100px' }}>
              <h5 className="fw-bold mb-4"><i className="fas fa-calendar-alt me-2 text-primary"></i>Infos Billetterie</h5>
              <div className="p-3 bg-light rounded-3 mb-3">
                <p className="small mb-0 text-muted">Les billets pour le match contre l'Algérie sont désormais disponibles en ligne.</p>
              </div>
              <button className="btn btn-primary w-100 rounded-pill mb-3">Acheter un billet</button>
              <button className="btn btn-outline-primary w-100 rounded-pill">Infos Accessibilité</button>

              <div className="mt-4 pt-4 border-top">
                <h6 className="fw-bold small text-uppercase text-muted">Support Fans</h6>
                <div className="d-flex align-items-center mt-3">
                  <div className="icon-box bg-primary text-white rounded-3 p-2 me-3">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div className="small">
                    <strong>+228 90 00 00 00</strong><br />
                    Support 24/7 disponible
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Matches

