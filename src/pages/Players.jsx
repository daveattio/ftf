import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { players } from '../data'

const Players = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  const [displayed, setDisplayed] = useState(players)

  useEffect(() => {
    let filtered = players
    if (filter !== 'all') {
      filtered = filtered.filter((p) => p.position === filter)
    }
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.position.toLowerCase().includes(term) ||
          p.club.toLowerCase().includes(term)
      )
    }
    setDisplayed(filtered)
  }, [searchTerm, filter])

  return (
    <section id="equipes" className="py-5 bg-white">
      <div className="container">
        <div className="section-title">
          <h2 data-aos="fade-up">EFFECTIF DES ÉPERVIERS</h2>
          <p data-aos="fade-up" data-aos-delay="100">Découvrez les talents du football togolais</p>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Rechercher un joueur..."
                className="form-control"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="filters d-flex flex-wrap justify-content-center gap-2 mb-5" data-aos="fade-up">
          {['all', 'Gardien', 'Défenseur', 'Milieu', 'Attaquant'].map((pos) => (
            <button
              key={pos}
              className={`btn rounded-pill px-4 ${filter === pos ? 'btn-primary' : 'btn-outline-light text-dark border-secondary'}`}
              onClick={() => setFilter(pos)}
            >
              {pos === 'all' ? 'Tous les postes' : pos}
            </button>
          ))}
        </div>

        <div className="row g-4" id="playersContainer">
          {displayed.map((player) => (
            <div
              key={player.id}
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
            >
              <div className="card player-card h-100 border-0 shadow-sm">
                <div className="text-center pt-4">
                  <div className="position-relative d-inline-block">
                    <img
                      src={player.image}
                      className="player-image"
                      alt={player.name}
                    />
                    <div className="position-absolute bottom-0 end-0 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                      #{player.id}
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h5 className="fw-bold mb-1">{player.name}</h5>
                  <p className="text-accent small fw-bold mb-3">{player.position.toUpperCase()}</p>
                  <div className="bg-light p-2 rounded-3 mb-3">
                    <span className="small text-muted">Club : </span>
                    <span className="small fw-bold">{player.club}</span>
                  </div>
                  <div className="player-stats">
                    <div className="stat">
                      <div className="stat-value">{player.matches}</div>
                      <div className="stat-label">Caps</div>
                    </div>
                    <div className="stat">
                      <div className="stat-value">{player.goals}</div>
                      <div className="stat-label">Buts</div>
                    </div>
                    <div className="stat">
                      <div className="stat-value">{player.age}</div>
                      <div className="stat-label">Âge</div>
                    </div>
                  </div>
                  <Link to={`/equipes/${player.id}`} className="btn btn-primary btn-sm w-100 rounded-pill mt-4 shadow-sm">
                    Voir la fiche <i className="fas fa-chevron-right ms-1 small"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {displayed.length === 0 && (
          <div className="text-center py-5">
            <i className="fas fa-user-slash fa-3x text-muted mb-3"></i>
            <p className="text-muted">Aucun joueur trouvé pour votre recherche.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Players

