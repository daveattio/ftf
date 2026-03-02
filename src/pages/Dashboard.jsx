import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [section, setSection] = useState('overview')
  const navigate = useNavigate()

  const showSection = (name) => {
    setSection(name)
  }

  const logout = () => {
    navigate('/')
  }

  const renderContent = () => {
    switch (section) {
      case 'overview':
        return (
          <div>
            <h2>Tableau de bord</h2>
            <div className="row">
              <div className="col-md-3">
                <div className="stat-card">
                  <i className="fas fa-users stat-icon"></i>
                  <div className="stat-value">23</div>
                  <div className="stat-label">Joueurs</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="stat-card bg-warning">
                  <i className="fas fa-futbol stat-icon"></i>
                  <div className="stat-value">12</div>
                  <div className="stat-label">Matchs</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="stat-card bg-danger">
                  <i className="fas fa-shopping-bag stat-icon"></i>
                  <div className="stat-value">45</div>
                  <div className="stat-label">Commandes</div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="stat-card bg-info">
                  <i className="fas fa-chart-line stat-icon"></i>
                  <div className="stat-value">1.2M</div>
                  <div className="stat-label">Visites</div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'joueurs':
        return <p>Formulaire CRUD des joueurs (à implémenter)</p>
      default:
        return <p>Section en cours de développement</p>
    }
  }

  return (
    <section id="adminDashboard" className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 p-0">
            <div className="dashboard-sidebar">
              <div className="p-3">
                <h4 className="mb-4">Administration</h4>
                <ul className="sidebar-menu">
                  <li className={section === 'overview' ? 'active' : ''} onClick={() => showSection('overview')}>
                    <i className="fas fa-tachometer-alt"></i>Tableau de bord
                  </li>
                  <li className={section === 'joueurs' ? 'active' : ''} onClick={() => showSection('joueurs')}>
                    <i className="fas fa-users"></i>Gestion joueurs
                  </li>
                  <li onClick={() => showSection('matchs')}>
                    <i className="fas fa-futbol"></i>Gestion matchs
                  </li>
                  <li onClick={() => showSection('selections')}>
                    <i className="fas fa-clipboard-list"></i>Convocations
                  </li>
                  <li onClick={() => showSection('boutique')}>
                    <i className="fas fa-shopping-bag"></i>Boutique
                  </li>
                  <li onClick={() => showSection('commandes')}>
                    <i className="fas fa-truck"></i>Commandes
                  </li>
                  <li onClick={() => showSection('utilisateurs')}>
                    <i className="fas fa-user-cog"></i>Utilisateurs
                  </li>
                  <li onClick={() => showSection('statistiques')}>
                    <i className="fas fa-chart-bar"></i>Statistiques
                  </li>
                  <li onClick={logout} style={{ marginTop: '2rem', cursor: 'pointer' }}>
                    <i className="fas fa-sign-out-alt"></i> Déconnexion
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-lg-10 p-4" id="dashboardContent">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
