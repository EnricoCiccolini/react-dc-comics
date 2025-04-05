//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/main'
import Footer from './components/footer'
import BluNav from './components/BluNav'

const linkNav = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOPS']
const linkFooter1 = ['Characters', 'Comics', 'Movies', 'Tv', 'Gasmes', 'Video', 'News']
const bluNavArray = [
  {
    'url': '../../buy-comics-digital-comics.png',
    'title': 'DIGITAL COMICS'
  },
  {
    'url': '../../buy-comics-merchandise.png',
    'title': 'DC MERCHANDISE'
  },
  {
    'url': '../../buy-comics-subscriptions.png',
    'title': 'SUBSCRIPTION'
  },
  {
    'url': '../../buy-comics-shop-locator.png',
    'title': 'COMICS SHOP LOCATOR'
  },
  {
    'url': '../../buy-dc-power-visa.svg',
    'title': 'DC POWER VISA'
  }

]





function App() {

  return (
    <>
      <Header array={linkNav} />
      <Main ></Main>
      <BluNav array={bluNavArray}></BluNav>
      <Footer array={linkFooter1}></Footer>
    </>
  )
}

export default App
