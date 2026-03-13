'use client'
import { useState } from 'react'

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#080608',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#F0EDE8'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1>🎯 وِجهة</h1>
          <p>اكتشف العروض القريبة منك</p>
          <button 
            onClick={() => setIsLoggedIn(true)}
            style={{
              padding: '16px 32px',
              background: '#8B1F24',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            دخول تجريبي
          </button>
        </div>
      </div>
    )
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
        onClick={() => setIsLoggedIn(false)}
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