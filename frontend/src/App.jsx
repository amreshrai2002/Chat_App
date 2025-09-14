import React from 'react'
import { Fragment } from 'react'
import { Routes, Route } from 'react-router'

import Navbar from './components/Navbar'

import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <Fragment>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* <Route path="" element={ } /> */}
      </Routes>
    </Fragment>
  )
}

export default App
