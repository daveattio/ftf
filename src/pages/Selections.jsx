import React from 'react'
import { selectionList } from '../data'

const Selections = () => {
  return (
    <section id="selections" className="py-5 bg-light">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>SÉLECTION NATIONALE</h2>
          <p className="text-muted">Liste des joueurs convoqués pour le prochain rassemblement</p>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-12">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h5 className="mb-0">Stage de préparation - Mars 2024</h5>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Joueur</th>
                        <th>Poste</th>
                        <th>Club</th>
                        <th>Statut</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectionList.map((p) => (
                        <tr key={p.id}>
                          <td>
                            <img
                              src={`https://via.placeholder.com/30x30/008751/FFFFFF?text=${p.name
                                .split(' ')
                                .map((n) => n.charAt(0))
                                .join('')}`}
                              className="rounded-circle me-2"
                              alt={p.name}
                            />
                            {p.name}
                          </td>
                          <td>{p.position}</td>
                          <td>{p.club}</td>
                          <td>
                            <span
                              className={`badge bg-${
                                p.status === 'Blessé' ? 'warning' : 'success'
                              }`}
                            >
                              {p.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Selections
