import { Route, Routes } from 'react-router-dom'

import Layout from './components/layout'
import Nav from './components/nav'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Error from './pages/error/error'
import Footer from 'components/footer'
import Portfolio from './pages/portfolio/portfolio'
import { DarkModeProvider } from 'utils/theme'
import Messages from 'pages/messages/messages'

export default function App() {
  return (
    <DarkModeProvider>
      <div className="w-screen h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="messages" element={<Messages />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </DarkModeProvider>
  )
}
