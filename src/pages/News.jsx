import React from 'react'
import { Link } from 'react-router-dom'
import { newsItems } from '../data'

const News = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>ACTUALITÉS</h2>
        </div>
        <div className="row">
          {newsItems.map((item, idx) => (
            <div
              key={item.id}
              className="col-lg-4 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={100 * (idx + 1)}
            >
              <div className="card news-card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div className="overflow-hidden">
                  <img src={item.image} className="card-img-top h-hover-zoom" alt="News" style={{ height: '200px', objectFit: 'cover' }} />
                </div>
                <div className="card-body p-4">
                  <div className="news-date mb-2">{item.date}</div>
                  <h5 className="news-title fw-bold">{item.title}</h5>
                  <p className="news-excerpt text-muted small">{item.excerpt}</p>
                  <Link
                    to={`/actualites/${item.id}`}
                    className="btn btn-link text-primary p-0 fw-bold text-decoration-none"
                  >
                    Lire la suite <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default News
