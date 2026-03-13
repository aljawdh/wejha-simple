'use client'

export default function HomePage() {
  const handleLogin = () => {
    const loginSection = document.getElementById('login-section')
    const welcomeSection = document.getElementById('welcome-section')
    
    loginSection.style.display = 'none'
    welcomeSection.style.display = 'flex'
  }

  const handleLogout = () => {
    const loginSection = document.getElementById('login-section')
    const welcomeSection = document.getElementById('welcome-section')
    
    loginSection.style.display = 'flex'
    welcomeSection.style.display = 'none'
  }

  return (
    <div>
      {/* صفحة تسجيل الدخول */}
      <div 
        id="login-section"
        style={{
          minHeight: '100vh',
          background: '#080608',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F0EDE8'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎯</div>
          <h1 style={{ fontSize: '28px', marginBottom: '8px', color: '#F0EDE8' }}>وِجهة</h1>
          <p style={{ marginBottom: '24px', color: '#9CA3AF' }}>اكتشف العروض القريبة منك</p>
          <button 
            onClick={handleLogin}
            style={{
              padding: '16px 32px',
              background: '#8B1F24',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            دخول تجريبي
          </button>
        </div>
      </div>

      {/* صفحة الترحيب */}
      <div 
        id="welcome-section"
        style={{ 
          display: 'none',
          padding: '2rem', 
          textAlign: 'center', 
          color: '#F0EDE8', 
          backgroundColor: '#080608', 
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <h1 style={{ color: '#F0EDE8', marginBottom: '16px' }}>🎯 مرحباً بك في وِجهة</h1>
        <p style={{ color: '#9CA3AF', marginBottom: '24px' }}>تم تسجيل الدخول بنجاح!</p>
        <button 
          onClick={handleLogout}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#8B1F24', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          تسجيل خروج
        </button>
      </div>
    </div>
  )
}
