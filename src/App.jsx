import React, { Suspense, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import AOS from 'aos'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Spinner from './components/Spinner'

// lazy-load pages to shorten initial bundle
const Home = React.lazy(() => import('./pages/Home'))
const Players = React.lazy(() => import('./pages/Players'))
const PlayerDetails = React.lazy(() => import('./pages/PlayerDetails'))
const Matches = React.lazy(() => import('./pages/Matches'))
const MatchDetails = React.lazy(() => import('./pages/MatchDetails'))
const News = React.lazy(() => import('./pages/News'))
const NewsDetails = React.lazy(() => import('./pages/NewsDetails'))
const Shop = React.lazy(() => import('./pages/Shop'))
const Selections = React.lazy(() => import('./pages/Selections'))
const Login = React.lazy(() => import('./pages/Login'))
const Dashboard = React.lazy(() => import('./pages/Dashboard'))

import { CartProvider } from './context/CartContext'
import CartDrawer from './components/CartDrawer'

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      disable: 'mobile',
      easing: 'ease-out-quad'
    })
  }, [])

  useEffect(() => {
    AOS.refresh();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <CartProvider>
      <Spinner />
      <Navbar />
      <CartDrawer />
      <main>
        <Suspense fallback={<div className="text-center py-5">Chargement...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipes" element={<Players />} />
            <Route path="/equipes/:id" element={<PlayerDetails />} />
            <Route path="/matchs" element={<Matches />} />
            <Route path="/matchs/:id" element={<MatchDetails />} />
            <Route path="/actualites" element={<News />} />
            <Route path="/actualites/:id" element={<NewsDetails />} />
            <Route path="/boutique" element={<Shop />} />
            <Route path="/selections" element={<Selections />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/*" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>

      </main>
      <Footer />
    </CartProvider>
  )
}

export default App
