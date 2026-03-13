'use client'
import { useState, useEffect } from 'react'
import CustomerAuth from '../../components/CustomerAuth'

export default function HomePage() {
  const [user, setUser] = useState(null)

  const handleLogin = (userData) => {
    setUser(userData)
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('wejha_user_session')
  }

  return (
    <div>
      {!user ? (
        <CustomerAuth onLogin={handleLogin} language="ar" />
      ) : (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#F0EDE8', backgroundColor: '#080608', minHeight: '100vh' }}>
          <h1>🎯 مرحباً بك في وِجهة</h1>
          <p>أهلاً {user.phone}</p>
          <button onClick={handleLogout} style={{ padding: '10px 20px', backgroundColor: '#8B1F24', color: 'white', border: 'none', borderRadius: '8px' }}>
            تسجيل خروج
          </button>
        </div>
      )}
    </div>
  )
}