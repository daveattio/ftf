import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsItems } from '../data';

const NewsDetails = () => {
    const { id } = useParams();
    const news = newsItems.find(n => n.id === parseInt(id));

    if (!news) {
        return (
            <div className="container py-5 text-center">
                <h2>Actualité non trouvée</h2>
                <Link to="/actualites" className="btn btn-primary mt-3">Retour aux actualités</Link>
            </div>
        );
    }

    return (
        <div className="news-details-page bg-light min-vh-100">
            <div className="container py-5">
                <nav aria-label="breadcrumb" className="mb-4" data-aos="fade-down">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                        <li className="breadcrumb-item"><Link to="/actualites">Actualités</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Détail</li>
                    </ol>
                </nav>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <article className="card border-0 shadow-sm rounded-4 overflow-hidden" data-aos="fade-up">
                            <img src={news.image} alt={news.title} className="img-fluid w-100" style={{ maxHeight: '500px', objectFit: 'cover' }} />

                            <div className="card-body p-4 p-md-5 bg-white">
                                <div className="news-meta mb-3 d-flex align-items-center">
                                    <span className="badge bg-accent-color px-3 py-2 rounded-pill me-3">OFFICIEL</span>
                                    <span className="text-muted small fw-bold"><i className="far fa-calendar-alt me-2"></i>{news.date}</span>
                                </div>

                                <h1 className="fw-bold mb-4 display-5">{news.title}</h1>

                                <p className="lead text-muted mb-4">
                                    {news.excerpt}
                                </p>

                                <div className="news-content text-muted lh-lg">
                                    <p>
                                        Lomé, Togo - Le bureau exécutif de la Fédération Togolaise de Football (FTF) informe le public sportif que les préparatifs
                                        vont bon train. Dans le cadre de sa politique de développement du football national, plusieurs initiatives sont en cours
                                        pour renforcer les capacités des acteurs locaux.
                                    </p>
                                    <p>
                                        "Nous sommes déterminés à offrir un spectacle de qualité à nos supporters et à mettre les joueurs dans les meilleures
                                        conditions possibles," a déclaré le porte-parole de la fédération lors de la conférence de presse hebdomadaire.
                                    </p>
                                    <blockquote className="blockquote border-start border-4 border-primary ps-4 my-5 py-2">
                                        <p className="h4 italic mb-0">Le soutien indéfectible de nos supporters est le moteur de notre réussite sur le terrain.</p>
                                    </blockquote>
                                    <p>
                                        La suite des événements sera communiquée via nos canaux digitaux officiels. Restez connectés pour ne rien manquer
                                        de l'actualité des Éperviers.
                                    </p>
                                </div>

                                <hr className="my-5 opacity-10" />

                                <div className="d-flex justify-content-between align-items-center flex-wrap g-3">
                                    <div>
                                        <h6 className="fw-bold mb-3">Partager cet article</h6>
                                        <div className="d-flex gap-2">
                                            <button className="btn btn-light rounded-circle p-0" style={{ width: '40px', height: '40px' }}><i className="fab fa-facebook-f text-primary"></i></button>
                                            <button className="btn btn-light rounded-circle p-0" style={{ width: '40px', height: '40px' }}><i className="fab fa-twitter text-info"></i></button>
                                            <button className="btn btn-light rounded-circle p-0" style={{ width: '40px', height: '40px' }}><i className="fab fa-whatsapp text-success"></i></button>
                                        </div>
                                    </div>
                                    <Link to="/actualites" className="btn btn-outline-primary rounded-pill px-4">Plus d'actualités</Link>
                                </div>
                            </div>
                        </article>

                        <section className="mt-5 py-5 border-top" data-aos="fade-up">
                            <h3 className="fw-bold mb-4 text-center">Actualités à la une</h3>
                            <div className="row g-4 justify-content-center">
                                {newsItems.filter(item => item.id !== news.id).slice(0, 2).map(item => (
                                    <div key={item.id} className="col-md-6">
                                        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden h-hover">
                                            <img src={item.image} className="card-img-top" alt={item.title} height="200" style={{ objectFit: 'cover' }} />
                                            <div className="card-body p-4">
                                                <small className="text-accent fw-bold">{item.date}</small>
                                                <h5 className="card-title fw-bold mt-2">{item.title}</h5>
                                                <Link to={`/actualites/${item.id}`} className="stretched-link"></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;
