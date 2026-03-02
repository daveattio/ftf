// static data used across the application
import jerseyImg from './assets/jersey.png'
import scarfImg from './assets/scarf.png'
import ballonImg from './assets/ballon.png'
import capImg from './assets/cap.png'
import player1Img from './assets/player1.png'

export const players = [
  {
    id: 1,
    name: 'Kodjo Aziangbé',
    position: 'Gardien',
    club: 'ASC Kara',
    age: 28,
    matches: 15,
    goals: 0,
    image: player1Img
  },
  {
    id: 2,
    name: 'Djené Dakonam',
    position: 'Défenseur',
    club: 'Getafe',
    age: 32,
    matches: 65,
    goals: 2,
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Gilles Sunu',
    position: 'Attaquant',
    club: 'BB Erzurumspor',
    age: 32,
    matches: 45,
    goals: 12,
    image: 'https://images.unsplash.com/photo-1510567198184-81459c36b106?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    name: 'Marouf Tchakei',
    position: 'Milieu',
    club: 'ASKO',
    age: 28,
    matches: 30,
    goals: 5,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 5,
    name: 'Khaled Narey',
    position: 'Défenseur',
    club: 'PAOK',
    age: 29,
    matches: 40,
    goals: 3,
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
]

export const selectionList = [
  {
    id: 1,
    name: 'Kodjo Aziangbé',
    position: 'Gardien',
    club: 'ASC Kara',
    status: 'Convoqué'
  },
  {
    id: 2,
    name: 'Djené Dakonam',
    position: 'Défenseur',
    club: 'Getafe',
    status: 'Convoqué'
  },
  {
    id: 3,
    name: 'Gilles Sunu',
    position: 'Attaquant',
    club: 'BB Erzurumspor',
    status: 'Blessé'
  }
]

export const upcomingMatches = [
  {
    id: 1,
    home: 'Togo',
    away: 'Algérie',
    date: '2024-03-15T20:00',
    venue: 'Stade de Kégué, Lomé'
  },
  {
    id: 2,
    home: 'Togo',
    away: 'Nigeria',
    date: '2024-03-22T20:00',
    venue: 'Stade de Kégué, Lomé'
  },
  {
    id: 3,
    home: 'Sénégal',
    away: 'Togo',
    date: '2024-03-29T19:00',
    venue: 'Stade Abdoulaye Wade, Dakar'
  }
]

export const newsItems = [
  {
    id: 1,
    date: '12 FÉV 2024',
    title: 'Préparation pour les éliminatoires de la CAN 2025',
    excerpt: 'Les Éperviers ont débuté leur préparation pour les prochaines échéances...',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    date: '10 FÉV 2024',
    title: 'Nouveau maillot officiel disponible en précommande',
    excerpt: 'Découvrez le nouveau maillot des Éperviers pour la saison 2024-2025...',
    image: jerseyImg
  },
  {
    id: 3,
    date: '8 FÉV 2024',
    title: 'Convocations pour le stage de mars',
    excerpt: 'Le sélectionneur national a dévoilé la liste des joueurs convoqués...',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1fb8f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
]

export const shopProducts = [
  {
    id: 1,
    name: 'Maillot domicile 2024',
    price: '25 000 FCFA',
    badge: 'Nouveau',
    image: jerseyImg,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Écharpe supporter',
    price: '5 000 FCFA',
    image: scarfImg
  },
  {
    id: 3,
    name: 'Ballon officiel',
    price: '15 000 FCFA',
    image: ballonImg
  },
  {
    id: 4,
    name: 'Casquette FTF',
    price: '3 500 FCFA',
    badge: 'Promo',
    image: capImg
  }
]
