'use client'
import { useState } from 'react'
import CustomerAuth from '../components/CustomerAuth'

export default function HomePage() {
  const [user, setUser] = useState(null)

  if (!user) {
    return <CustomerAuth onLogin={setUser} language="ar" />
  }

  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      color: '#F0EDE8', 
      backgroundColor: '#080608', 
      minHeight: '100vh' 
    }}>
      <h1>🎯 مرحباً بك في وِجهة</h1>
      <p>تم تسجيل الدخول بنجاح!</p>
      <button 
        onClick={() => setUser(null)}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#8B1F24', 
          color: 'white', 
          border: 'none', 
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        تسجيل خروج
      </button>
    </div>
  )
}