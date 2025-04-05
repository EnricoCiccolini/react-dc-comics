//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Header from './components/Header'
import Main from './components/main'
import Footer from './components/footer'
import BluNav from './components/BluNav'

const linkNav = ['CHARACTERS', 'COMICS', 'MOVIES', 'TV', 'GAMES', 'COLLECTIBLES', 'VIDEOS', 'FANS', 'NEWS', 'SHOPS']
const linkFooter1 = ['Characters', 'Comics', 'Movies', 'Tv', 'Gasmes', 'Video', 'News']

function App() {

  return (
    <>
      <Header array={linkNav} />
      <Main  ></Main>
      <BluNav></BluNav>
      <Footer array={linkFooter1}></Footer>
    </>
  )
}

export default App
