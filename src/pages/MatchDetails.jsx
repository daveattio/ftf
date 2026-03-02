import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { upcomingMatches } from '../data';

const MatchDetails = () => {
    const { id } = useParams();
    const match = upcomingMatches.find(m => m.id === parseInt(id));

    if (!match) {
        return (
            <div className="container py-5 text-center">
                <h2>Match non trouvé</h2>
                <Link to="/matchs" className="btn btn-primary mt-3">Retour au calendrier</Link>
            </div>
        );
    }

    return (
        <div className="match-details-page bg-light min-vh-100">
            <div className="container py-5">
                <nav aria-label="breadcrumb" className="mb-4" data-aos="fade-down">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                        <li className="breadcrumb-item"><Link to="/matchs">Matchs</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{match.home} vs {match.away}</li>
                    </ol>
                </nav>

                <div className="card border-0 shadow-lg rounded-4 overflow-hidden mb-5" data-aos="zoom-in">
                    <div className="bg-primary text-white p-5 text-center position-relative overflow-hidden">
                        <div className="row align-items-center justify-content-center position-relative z-1">
                            <div className="col-md-4">
                                <div className="display-4 fw-bold mb-2">{match.home}</div>
                                <img src={`https://via.placeholder.com/100?text=${match.home.charAt(0)}`} alt={match.home} className="rounded-circle bg-white p-3 mb-3" />
                            </div>
                            <div className="col-md-2 my-4 my-md-0">
                                <div className="h1 fw-light opacity-50">VS</div>
                                <div className="badge bg-secondary-color text-dark px-4 py-2 rounded-pill fw-bold">EN ATTENTE</div>
                            </div>
                            <div className="col-md-4">
                                <div className="display-4 fw-bold mb-2">{match.away}</div>
                                <img src={`https://via.placeholder.com/100?text=${match.away.charAt(0)}`} alt={match.away} className="rounded-circle bg-white p-3 mb-3" />
                            </div>
                        </div>
                        {/* Background pattern placeholder */}
                        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    </div>

                    <div className="card-body p-4 bg-white">
                        <div className="row text-center g-4">
                            <div className="col-md-4">
                                <div className="text-muted small text-uppercase">Date & Heure</div>
                                <div className="h5 fw-bold mb-0">
                                    {new Date(match.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                                </div>
                                <div className="text-primary fw-bold h4">{new Date(match.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</div>
                            </div>
                            <div className="col-md-4">
                                <div className="text-muted small text-uppercase">Lieu</div>
                                <div className="h5 fw-bold mb-0">{match.venue}</div>
                            </div>
                            <div className="col-md-4">
                                <div className="text-muted small text-uppercase">Compétition</div>
                                <div className="h5 fw-bold mb-0">Éliminatoires CAN 2025</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-lg-8" data-aos="fade-right">
                        <div className="card border-0 shadow-sm p-4 rounded-4 mb-4">
                            <h4 className="fw-bold mb-4">Présentation du match</h4>
                            <p className="text-muted">
                                Ce match crucial opposant {match.home} à {match.away} s'inscrit dans le cadre des éliminatoires pour la Coupe d'Afrique des Nations 2025.
                                Les Éperviers, portés par leur public au {match.venue}, auront à cœur de s'imposer pour consolider leur position dans le groupe.
                            </p>
                            <h5 className="fw-bold mt-4 mb-3">Dernière Confrontation</h5>
                            <div className="p-3 bg-light rounded-4 d-flex justify-content-between align-items-center">
                                <span>{match.home}</span>
                                <span className="badge bg-dark px-3 py-2">1 - 1</span>
                                <span>{match.away}</span>
                            </div>
                        </div>

                        <div className="card border-0 shadow-sm p-4 rounded-4" data-aos="fade-up">
                            <h4 className="fw-bold mb-4">Billeterie Officielle</h4>
                            <div className="table-responsive">
                                <table className="table table-hover align-middle">
                                    <thead>
                                        <tr>
                                            <th>Catégorie</th>
                                            <th>Prix</th>
                                            <th>Disponibilité</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Pelouse / Virages</td>
                                            <td className="fw-bold">2 000 FCFA</td>
                                            <td><span className="text-success"><i className="fas fa-check-circle me-1"></i>Disponible</span></td>
                                            <td className="text-end"><button className="btn btn-sm btn-primary rounded-pill">Acheter</button></td>
                                        </tr>
                                        <tr>
                                            <td>Tribune Annexe</td>
                                            <td className="fw-bold">5 000 FCFA</td>
                                            <td><span className="text-warning"><i className="fas fa-clock me-1"></i>Limité</span></td>
                                            <td className="text-end"><button className="btn btn-sm btn-primary rounded-pill">Acheter</button></td>
                                        </tr>
                                        <tr>
                                            <td>Tribune Officielle</td>
                                            <td className="fw-bold">15 000 FCFA</td>
                                            <td><span className="text-danger"><i className="fas fa-times-circle me-1"></i>Épuisé</span></td>
                                            <td className="text-end"><button className="btn btn-sm btn-secondary disabled rounded-pill">Acheter</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4" data-aos="fade-left">
                        <div className="card border-0 shadow-sm p-4 rounded-4 sticky-top" style={{ top: '100px' }}>
                            <h5 className="fw-bold mb-4">Accès au Stade</h5>
                            <div className="mb-4">
                                <div className="d-flex mb-3">
                                    <div className="text-primary me-3"><i className="fas fa-bus fa-lg"></i></div>
                                    <div>
                                        <h6 className="mb-1 fw-bold">Transports en commun</h6>
                                        <small className="text-muted">Navettes spéciales depuis le centre-ville toutes les 15 minutes.</small>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <div className="text-primary me-3"><i className="fas fa-parking fa-lg"></i></div>
                                    <div>
                                        <h6 className="mb-1 fw-bold">Parking</h6>
                                        <small className="text-muted">Parking P1 & P2 réservés aux détenteurs de billets Tribune Officielle.</small>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="text-primary me-3"><i className="fas fa-clock fa-lg"></i></div>
                                    <div>
                                        <h6 className="mb-1 fw-bold">Ouverture des portes</h6>
                                        <small className="text-muted">3 heures avant le coup d'envoi pour éviter les files d'attente.</small>
                                    </div>
                                </div>
                            </div>
                            <Link to="/matchs" className="btn btn-outline-primary w-100 rounded-pill">Voir tous les matchs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchDetails;
