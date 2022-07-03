import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import Layout from './components/layout'
import Nav from './components/nav'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Error from './pages/error/error'
import Footer from 'components/footer'
import Portfolio from './pages/portfolio/portfolio'
import { ThemeProvider } from 'contexts/theme'
import Messages from 'pages/messages/messages'
import Signup from 'pages/auth/signup'
import Login from 'pages/auth/login'
import { AuthProvider, useAuth } from 'contexts/auth'

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="w-screen h-screen">
          <Nav />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<About />} />
              <Route
                path="contact"
                element={
                  <ProtectedRoute>
                    <Contact />
                  </ProtectedRoute>
                }
              />
              <Route path="portfolio" element={<Portfolio />} />
              <Route
                path="messages"
                element={
                  <ProtectedRoute>
                    <Messages />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Error />} />
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </AuthProvider>
  )
}

const ProtectedRoute = ({
  children
}: {
  children: JSX.Element
}): JSX.Element => {
  const auth = useAuth()

  if (auth.currentUser !== null) {
    return children ? children : <Outlet />
  }
  return <Navigate to="/signup" />
}
