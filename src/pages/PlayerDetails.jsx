import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { players } from '../data';

const PlayerDetails = () => {
    const { id } = useParams();
    const player = players.find(p => p.id === parseInt(id));

    if (!player) {
        return (
            <div className="container py-5 text-center">
                <h2>Joueur non trouvé</h2>
                <Link to="/equipes" className="btn btn-primary mt-3">Retour à l'équipe</Link>
            </div>
        );
    }

    return (
        <div className="player-details-page bg-light min-vh-100">
            <div className="container py-5">
                <nav aria-label="breadcrumb" className="mb-4" data-aos="fade-down">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                        <li className="breadcrumb-item"><Link to="/equipes">Équipe</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{player.name}</li>
                    </ol>
                </nav>

                <div className="row g-4">
                    <div className="col-lg-4" data-aos="fade-right">
                        <div className="card border-0 shadow-sm overflow-hidden rounded-4">
                            <img src={player.image} alt={player.name} className="img-fluid w-100" />
                            <div className="card-body text-center p-4">
                                <span className="badge bg-primary mb-2 px-3 py-2 rounded-pill">{player.position}</span>
                                <h2 className="fw-bold mb-0">{player.name}</h2>
                                <p className="text-muted mt-2 mb-0">{player.club}</p>
                            </div>
                        </div>

                        <div className="card border-0 shadow-sm mt-4 p-4 rounded-4" data-aos="fade-up">
                            <h5 className="fw-bold mb-3">Informations</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="d-flex justify-content-between py-2 border-bottom">
                                    <span className="text-muted">Âge</span>
                                    <span className="fw-bold">{player.age} ans</span>
                                </li>
                                <li className="d-flex justify-content-between py-2 border-bottom">
                                    <span className="text-muted">Sélections</span>
                                    <span className="fw-bold">{player.matches}</span>
                                </li>
                                <li className="d-flex justify-content-between py-2">
                                    <span className="text-muted">Buts</span>
                                    <span className="fw-bold text-accent">{player.goals}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-8" data-aos="fade-left">
                        <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
                            <h3 className="fw-bold mb-4">Biographie & Performance</h3>
                            <p className="text-muted">
                                {player.name} est un élément clé de la sélection nationale du Togo. Évoluant actuellement au club de {player.club},
                                il apporte toute son expérience et son talent au service des Éperviers. Ses performances récentes font de lui
                                l'un des joueurs les plus suivis de la sélection.
                            </p>

                            <div className="row g-3 mt-2">
                                <div className="col-md-4">
                                    <div className="p-3 bg-light rounded-3 text-center">
                                        <div className="h4 fw-bold text-primary mb-1">92%</div>
                                        <div className="small text-muted text-uppercase">Passes réussies</div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="p-3 bg-light rounded-3 text-center">
                                        <div className="h4 fw-bold text-primary mb-1">12.5km</div>
                                        <div className="small text-muted text-uppercase">Dist. moyenne / match</div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="p-3 bg-light rounded-3 text-center">
                                        <div className="h4 fw-bold text-primary mb-1">4</div>
                                        <div className="small text-muted text-uppercase">Passes décisives</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card border-0 shadow-sm p-4 rounded-4" data-aos="fade-up">
                            <h4 className="fw-bold mb-4">Articles liés</h4>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center p-3 bg-light rounded-4">
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1 text-truncate">Déclaration de {player.name} après le match</h6>
                                            <small className="text-muted">Il y a 2 jours</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="d-flex align-items-center p-3 bg-light rounded-4">
                                        <div className="flex-grow-1">
                                            <h6 className="mb-1 text-truncate">Analyse tactique : Le rôle de {player.name}</h6>
                                            <small className="text-muted">Il y a 5 jours</small>
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

export default PlayerDetails;
